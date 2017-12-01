const fs = require('fs');
const path = require('path');
const rimraf = require( 'rimraf' );
const archiver = require('archiver');
const JSZip = require('jszip');
const uuid = require('uuid/v4');
const Handlebars = require('handlebars');

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
		utils.loadFile(paths.absFile(manifestPath))
		.then((contents) => {
			resolve(JSON.parse(contents));
		})
		.catch((error) => {
			reject(error);
		});
	});
}



function buildComponentHtml(manifest, contents) {
	return new Promise((resolve, reject) => {
		// compile template
		var template = Handlebars.compile(contents, {
			noEscape: true,
			preventIndent: true
		});

		var data = {};
		// external scripts
		data = buildExternalScripts(
			manifest,
			data
		);
		// files: js, css (also, beyond GWD spec: assets)
		data = buildFiles(
			manifest,
			data
		);

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
		manifest.externalScripts.forEach((externalScript) => {
			data.externalScripts += indent + '<script src="' + externalScript + '"></script>\n';
		});
	}
	return data;
}
function buildFiles(manifest, data, tabs) {
	const indent = utils.getIndent(tabs);
	data.scripts = '\n';
	if ('files' in manifest) {

		// build js loads
		if ('js' in manifest.files && Array.isArray(manifest.files.js)) {
			manifest.files.js.forEach((path) => {
				data.scripts += indent + '<script src="' + path + '"></script>\n';
			});
		}

		// build css loads
		if ('css' in manifest.files && Array.isArray(manifest.files.css)) {
			manifest.files.css.forEach((path) => {
				data.scripts += indent + '<link rel="stylesheet" href="' + path + '">\n';
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
				manifest.files.js.forEach((file) => {
					if (file == trackerFilename) {
						hasId = true;
						return;
					}
				});
				if (!hasId) {
					manifest.files.js.push(trackerFilename);
				}
			}
			else {
				manifest.files.js = [
					trackerFilename
				];
			}
		}
		else {
			manifest.files = {
				js: [
					trackerFilename
				]
			}
		}

		// write updated manifest
		fs.writeFile(
			paths.manifestJsonPath(), 
			JSON.stringify(manifest, null, 2), 
			(err) => {
				if (err) {
					return reject(err);
				}
				resolve();
			}
		);
	});
}

function getTrackerFilename() {
	var trackerFilename;
	fs.readdirSync('./src').forEach((item) => {
		if (item.match(/[^\-]{8}\-[^\-]{4}\-[^\-]{4}\-[^\-]{4}\-[^\-]{12}/)) {
			trackerFilename = item;
			return;
		}
	});
	return trackerFilename;
}






function publishComponent() {
	return new Promise((resolve, reject) => {
		// load manifest
		loadGwdManifest()

		// prepare destination
		.then((manifest) => {
			return new Promise((resolve, reject) => {
				if (!fs.existsSync(paths.distGwdPath())) {
					fs.mkdirSync(paths.distGwdPath());
					resolve(manifest);
				}
				else {
					rimraf(paths.distGwdPath() + '*', () => {
						resolve(manifest);
					});
				}
			});
		})

		// re-path all the assets to root-directory :o
		.then((manifest) => {
			return new Promise((resolve, reject) => {
				var zip = new JSZip();
				var promises = [];
				if ('files' in manifest) {
					['js', 'css'].forEach((format) => {
						if (format in manifest.files && Array.isArray(manifest.files[format])) {
							manifest.files[format].forEach((filePath, i) => {
								// generate non-colliding name
								const basename = path.basename(filePath).replace(/\.[^\.]*$/, '');
								const zipName = `${basename}__${uuid().slice(-4)}${path.extname(filePath)}`;
								//log(`./src/${filePath} -> zip://${zipName}`);

								// read file into promise
								const promise = new Promise((resolve, reject) => {
									fs.readFile(`./src/${filePath}`, (err, content) => {
										if (err) {
											return reject(err);
										}
										resolve(content);
									});
								});

								// promise file to zip
								zip.file(zipName, promise);

								// update manifest to non-colliding name
								manifest.files[format][i] = zipName;

								promises.push(promise);
							});
						}
					});
				}
				Promise.all(promises).then(() => {
					// add the manifest to the zip
					zip.file('manifest.json', JSON.stringify(manifest, null, 2));

					// resolve
					resolve({ name: manifest.tagName, zip: zip });
				})
				.catch((err) => {
					reject(err);
				});
			});
		})



		// create gwd component package
		.then((result) => {
			return new Promise((resolve, reject) => {
				result.zip.generateNodeStream({ 
					type: 'nodebuffer',
					streamFiles: true
				})
				.pipe(
					fs.createWriteStream(
						paths.distGwdPath() + result.name + '.zip'
					)
				)
				.on('finish', () => {
					resolve();
				});
			});
		})

		.catch((err) => {
			reject(err);
		})
	});
}


module.exports = {
	loadGwdManifest: loadGwdManifest,
	buildComponentHtml: buildComponentHtml,
	attachTracker: attachTracker,
	publishComponent: publishComponent
}
