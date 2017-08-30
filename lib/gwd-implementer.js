'use strict';

const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const rimraf = require( 'rimraf' );
const archiver = require('archiver');


const paths = require('./paths');
const utils = require('./utils');


//
var log = true;

function setLog(value) {
	log = value;
}



function buildLinkTemplate(manifest, componentHtmlPath, contents) {
	return new Promise((resolve, reject) => {
		// compile template
		var template = Handlebars.compile(contents, {
			noEscape: true,
			preventIndent: true
		});

		var data = {};
		// web-component link import
		data = buildLinkTag(
			componentHtmlPath,
			data
		);
		// web-component instance and id
		data = buildComponentTag(
			manifest.tagName,
			data
		);

		// push data to template
		var result = template(data);
		
		resolve(result);
	});	
}

function buildLinkTag(componentHtmlPath, data, tabs) {
	data.componentHtmlPath = componentHtmlPath;
	return data;
}
function buildComponentTag(tagName, data, tabs) {
	const indent = utils.getIndent(tabs);
	data.componentTagInstance = `\n${indent}\t\t<${tagName}></${tagName}>\n`;
	data.componentId = tagName;
	return data;
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
		// relative scripts
		data = buildScripts(
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
	if('externalScripts' in manifest && Array.isArray(manifest.externalScripts)) {
		manifest.externalScripts.forEach((externalScript) => {
			data.externalScripts += indent + '<script src="' + externalScript + '"></script>\n';
		});
	}
	return data;
}
function buildScripts(manifest, data, tabs) {
	const indent = utils.getIndent(tabs);
	data.scripts = '\n';
	if('files' in manifest) {
		// build js script loads
		if('js' in manifest.files && Array.isArray(manifest.files.js)) {
			manifest.files.js.forEach((script) => {
				data.scripts += indent + '<script src="' + script + '"></script>\n';
			});
		}
		// build css loads
		if('css' in manifest.files && Array.isArray(manifest.files.css)) {
			manifest.files.css.forEach((script) => {
				data.scripts += indent + '<link rel="stylesheet" href="' + script + '">\n';
			});
		}
	}
	return data;
}
/*
function buildMethods(manifest, data, tabs) {
	const indent = utils.getIndent(tabs);
	data.methods = '\n';
	if('methods' in manifest && Array.isArray(manifest.methods)) {
		manifest.methods.forEach((method) => {
			data.methods += indent + 'component.' + method + '(';
			if('parameters' in method) {
				method.parameters.forEach((parameter) => {
					data.methods += '';
				});
			}
		});
	}
	data.methods = '';
}
*/




function loadFile(path) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, 'utf-8', (err, contents) => {
			if (err) {
				reject(err);
			}
			resolve(contents);
		});
	});
}
function writeFile(path, contents) {
	return new Promise((resolve, reject) => {
		fs.writeFile(path, contents, (err) => {
			if (err) {
				reject(err);
			}
			resolve();
		});
	});
}









function loadGwdManifest(manifestPath) {
	return new Promise((resolve, reject) => {
		if (log) console.log(` - manifest.json at: ${manifestPath}`);
		if (!fs.existsSync(paths.absFile(manifestPath))) {
			reject(new Error(`No GWD manifest was found`));
		}
		loadFile(paths.absFile(manifestPath))
		.then((contents) => {
			resolve(JSON.parse(contents));
		})
		.catch((error) => {
			reject(error);
		});
	});
}



function implementLinkTemplate(manifest, templatePath, implementationPath) {
	return new Promise((resolve, reject) => {
		if (log) console.log(` - link template: ${templatePath}\n - destination: ${implementationPath}`);

		// load link template
		loadFile(paths.absFile(templatePath))

		// build with manifest data
		.then((contents) => {
			return buildComponentHtml(
				manifest, 
				contents
			);
		})
		// save component.html
		.then((testIndex) => {
			return writeFile(
				paths.absFile(implementationPath), 
				testIndex
			);
		})
		// resolve
		.then(() => {
			resolve(manifest);
		})
		.catch((error) => {
			reject(error);
		});
	});
}


function implementTemplate(manifest, templatePath, linkPath, implementationPath) {
	return new Promise((resolve, reject) => {
		if (log) console.log(` - template: ${templatePath}\n - destination: ${implementationPath}`);

		// load boilerplate-tests template
		loadFile(paths.absFile(templatePath))

		// then build it out
		.then((contents) => {
			return buildLinkTemplate(
				manifest,
				linkPath,
				contents
			)
			.catch((err) => {
				console.error(err);
			});
		})

		// save
		.then((template) => {
			return writeFile(
				paths.absFile(implementationPath), 
				template
			);
		})

		// resolve
		.then(() => {
			resolve(manifest);
		})

		// errors
		.catch((error) => {
			console.error(error);
			reject(error);
		});

	});
}




function publishComponent() {
	return new Promise((resolve, reject) => {
		// load manifest
		loadFile(
			paths.srcFolderPath() + paths.GWD_MANIFEST_JSON_FILENAME
		)

		// prepare destination
		.then((contents) => {
			return new Promise((resolve, reject) => {
				if (!fs.existsSync(paths.distGwdPath())) {
					fs.mkdirSync(paths.distGwdPath());
					resolve(contents);
				}
				else {
					rimraf(paths.distGwdPath() + '*', () => {
						resolve(contents);
					});
				}
			});
		})

		// create gwd component package
		.then((contents) => {
			var manifest = JSON.parse(contents);
			var output = fs.createWriteStream( 
				paths.distGwdPath() + manifest.tagName + '.zip'
			);
			var archive = archiver( 'zip', {
				store: true
			});
			output.on( 'close', () => {
				resolve();
			});
			output.on('error', (error) => {
				reject(error);
			});
			archive.pipe(output);
			archive.directory(paths.srcFolderPath(), '/');
			archive.finalize();
		})

		.catch((err) => {
			reject(err);
		})
	});
}


module.exports = {
	setLog: setLog,
	loadGwdManifest: loadGwdManifest,
	implementLinkTemplate: implementLinkTemplate,
	implementTemplate: implementTemplate,
	publishComponent: publishComponent
}

