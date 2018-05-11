const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const archiver = require('archiver');
const JSZip = require('jszip');
const uuid = require('uuid/v4');
const Handlebars = require('handlebars');
const escapeRegex = require('escape-regexp');
const moment = require('moment');

const paths = require('./paths');
const utils = require('./utils');
const tracker = require('./tracker');

const debug = require('debug');
const log = debug(require('../package.json').name + ':gwd');

function loadGwdManifest() {
  return new Promise((resolve, reject) => {
    const manifestPath = paths.manifestJsonPath();
    log(`Loading manifest: ${manifestPath}`);
    if (!fs.existsSync(paths.absFile(manifestPath))) {
      reject(new Error(`No GWD manifest was found`));
    }
    utils
      .loadFile(paths.absFile(manifestPath))
      .then(contents => {
        resolve(JSON.parse(contents));
      })
      .catch(error => {
        reject(error);
      });
  });
}

function buildGwdPreview(manifest, contents) {
  return new Promise((resolve, reject) => {
    // compile template
    var template = Handlebars.compile(contents, {
      noEscape: true,
      preventIndent: true
    });

    var data = {
      componentId: manifest.tagName
    };
    // external scripts
    data = buildExternalScripts(manifest, data);
    // files: js, css (also, beyond GWD spec: assets)
    data = buildFiles(manifest, data);

    /* methods
		// TODO(anybody): however much automated generation of gwd's manifest is desired
		data = buildMethods(
			manifest,
			data
		);
	*/
    // push data to template
    var result = template(data);

    resolve(result);
  });
}

function buildExternalScripts(manifest, data, tabs) {
  const indent = utils.getIndent(tabs);
  data.externalScripts = '\n';
  if ('externalScripts' in manifest && Array.isArray(manifest.externalScripts)) {
    manifest.externalScripts.forEach(externalScript => {
      data.externalScripts += indent + '<script src="' + externalScript + '"></script>\n';
    });
  }
  return data;
}
function buildFiles(manifest, data, tabs) {
  const indent = utils.getIndent(tabs);
  data.inlinedScripts = '\n';
  data.cssLinks = '\n';
  if ('files' in manifest) {
    // inline js loads
    if ('js' in manifest.files && Array.isArray(manifest.files.js)) {
      manifest.files.js.forEach(path => {
        const content = fs.readFileSync(paths.srcFolderPath() + path);
        data.inlinedScripts += content;
      });
    }

    // build css loads
    if ('css' in manifest.files && Array.isArray(manifest.files.css)) {
      manifest.files.css.forEach(path => {
        data.cssLinks += indent + '<link rel="stylesheet" href="' + path + '">\n';
      });
    }
  }
  return data;
}
/*
function buildMethods(manifest, data, tabs) {
	const indent = utils.getIndent(tabs);
	data.methods = '\n';
	if ('methods' in manifest && Array.isArray(manifest.methods)) {
		manifest.methods.forEach((method) => {
			data.methods += indent + 'component.' + method + '(';
			if ('parameters' in method) {
				method.parameters.forEach((parameter) => {
					data.methods += '';
				});
			}
		});
	}
	data.methods = '';
}
*/

function attachTracker(manifest) {
  return new Promise((resolve, reject) => {
    log(' - adding tracker file as JS dependency');
    var trackerFilename = getTrackerFilename();

    // add tracker to manifest
    if ('files' in manifest) {
      if ('js' in manifest.files) {
        var hasId = false;
        manifest.files.js.forEach(file => {
          if (file == trackerFilename) {
            hasId = true;
            return;
          }
        });
        if (!hasId) {
          manifest.files.js.push(trackerFilename);
        }
      } else {
        manifest.files.js = [trackerFilename];
      }
    } else {
      manifest.files = {
        js: [trackerFilename]
      };
    }

    // write updated manifest
    fs.writeFile(paths.manifestJsonPath(), JSON.stringify(manifest, null, 2), err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

function getTrackerFilename() {
  var trackerFilename;
  fs.readdirSync('./src').forEach(item => {
    if (item.match(/[^\-]{8}\-[^\-]{4}\-[^\-]{4}\-[^\-]{4}\-[^\-]{12}/)) {
      trackerFilename = item;
      return;
    }
  });
  return trackerFilename;
}

function distComponent() {
  return new Promise((resolve, reject) => {
    // load top package
    utils.loadJson(paths.absFile('package.json')).then(packageJson => {
      // load manifest
      loadGwdManifest()
        // prepare destination
        .then(manifest => {
          return new Promise((resolve, reject) => {
            if (!fs.existsSync(paths.distGwdPath())) {
              fs.mkdirSync(paths.distGwdPath());
              resolve(manifest);
            } else {
              resolve(manifest);
            }
          });
        })

        // re-path all the assets to root-directory :o
        .then(manifest => {
          return new Promise((resolve, reject) => {
            var zip = new JSZip();
            const zipName = manifest.tagName + '.zip';

            var prevZip;
            var gwdFilenames;
            // open previous gwd zip
            getPreviousZip(paths.distGwdPath() + zipName)
              .then(_prevZip => {
                prevZip = _prevZip;
                // get map of filenames
                return getGwdFilenames(paths.distGwdPath() + paths.GWD_FILENAMES);
              })
              .then(_gwdFilenames => {
                gwdFilenames = _gwdFilenames;

                var promises = [];
                if ('files' in manifest) {
                  ['js', 'css'].forEach(format => {
                    if (format in manifest.files && Array.isArray(manifest.files[format])) {
                      manifest.files[format].forEach((filePath, i) => {
                        // check dist for existing non-colliding name: unfortunately GWD doesn't clean up after itself, so we have to generate the same names
                        const safeName = getGwdPackageFilename(prevZip, gwdFilenames, filePath);
                        // add to file map
                        gwdFilenames[filePath] = safeName;

                        // build new zip - read file into promise
                        const promise = new Promise((resolve, reject) => {
                          fs.readFile(`./src/${filePath}`, (err, content) => {
                            if (err) {
                              return reject(err);
                            }
                            // write a comment reflecting current version
                            content = applyVersionComment(packageJson, content, safeName);

                            resolve(content);
                          });
                        });
                        // promise file to zip
                        zip.file(safeName, promise);

                        // update manifest to non-colliding name
                        manifest.files[format][i] = safeName;

                        promises.push(promise);
                      });
                    }
                  });
                }
                Promise.all(promises)
                  .then(() => {
                    // write the gwd-filemap
                    fs.writeFileSync(paths.distGwdPath() + paths.GWD_FILENAMES, JSON.stringify(gwdFilenames, null, 2));
                    // add the manifest to the zip
                    zip.file('manifest.json', JSON.stringify(manifest, null, 2));
                    // resolve
                    resolve({ name: zipName, zip: zip });
                  })
                  .catch(err => {
                    reject(err);
                  });
              })
              .catch(err => {
                reject(err);
              });
          });
        })

        // create gwd component package
        .then(result => {
          return new Promise((resolve, reject) => {
            result.zip
              .generateNodeStream({
                type: 'nodebuffer',
                streamFiles: true
              })
              .pipe(fs.createWriteStream(paths.distGwdPath() + result.name))
              .on('finish', () => {
                resolve();
              });
          });
        })

        .catch(err => {
          reject(err);
        });
    });
  });
}

function getPreviousZip(zipPath) {
  return new Promise((resolve, reject) => {
    // if the zip exists, load it
    var promise;
    if (fs.existsSync(zipPath)) {
      promise = new Promise((resolve, reject) => {
        // open the dist zip
        fs.readFile(zipPath, function(err, data) {
          if (err) {
            return reject(err);
          }
          // read zip content
          JSZip.loadAsync(data).then(zip => {
            resolve(zip);
          });
        });
      });
    } else {
      promise = Promise.resolve();
    }
    promise
      .then(prevZip => {
        if (prevZip) {
          resolve(prevZip);
        } else {
          resolve();
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

function getGwdFilenames(path) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(path)) {
      return resolve({});
    }
    fs.readFile(path, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(JSON.parse(data));
    });
  });
}

function getGwdPackageFilename(prevZip, gwdFilenames, filePath) {
  // determine base-name and unique-name
  const basename = path.basename(filePath).replace(/\.[^\.]*$/, '');
  const uniqueName = `${basename}__${uuid().slice(-4)}${path.extname(filePath)}`;

  // locate filename in map
  if (prevZip && gwdFilenames) {
    if (filePath in gwdFilenames) {
      return gwdFilenames[filePath];
    }
  }
  // otherwise return new unique name
  return uniqueName;
}

function applyVersionComment(packageJson, content, scriptName) {
  const ver = `${packageJson.genericSource.name}:${scriptName}, VERSION: ${packageJson.version}, Published: ${moment().format(
    'YYYY/MM/DD HH:mm:ss'
  )}`;
  return `\n/* ${ver} $*/\n` + content;
}

module.exports = {
  loadGwdManifest,
  buildGwdPreview,
  attachTracker,
  distComponent
};
