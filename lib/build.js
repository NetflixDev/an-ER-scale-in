const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

const paths = require('./paths');
const utils = require('./utils');
const gwd = require('./gwd');

const debug = require('debug');
const log = debug('component:build');



function linkTemplate(manifest, templatePath, implementationPath) {
	return new Promise((resolve, reject) => {
		log(` - link template: ${templatePath}\n - destination: ${implementationPath}`);

		// load link template
		utils.loadFile(paths.absFile(templatePath))

		// build with manifest data
		.then((contents) => {
			return gwd.buildComponentHtml(
				manifest, 
				contents
			);
		})
		// save component.html
		.then((testIndex) => {
			return utils.writeFile(
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












function template(manifest, templatePath, linkPath, implementationPath) {
	return new Promise((resolve, reject) => {
		log(` - template: ${templatePath}\n - destination: ${implementationPath}`);

		// load boilerplate-tests template
		utils.loadFile(paths.absFile(templatePath))

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
			return utils.writeFile(
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


function buildLinkTemplate(manifest, componentHtmlPath, contents) {
	return new Promise((resolve, reject) => {
		// compile handlebars template
		var hb = Handlebars.compile(contents, {
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
		var result = hb(data);
		
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







function npmEntry(manifest, templatePath) {
	return new Promise((resolve, reject) => {
		// load link template
		fs.readFile(templatePath, 'utf-8', (err, contents) => {
			if (err) {
				return reject(err);
			}
			// compile handlebars template
			var hb = Handlebars.compile(contents, {
				noEscape: true,
				preventIndent: true
			});

			// construct imports from manifest
			var data = {
				imports: ''
			};
			if('files' in manifest) {
				// only take javascript depedencies (not css, html, etc)
				if('js' in manifest.files && Array.isArray(manifest.files.js)) {
					manifest.files.js.forEach((script) => {
						// only take relative paths
						if (!script.match(/^(https?)|(file):\/\//)) {
							const importPath = './' + path.normalize(`./src/${script}`);
							data.imports += `import '${importPath}'\n`;
						}
					});
				}
			}

			// write template output
			fs.writeFile('./index.js', hb(data), (err) => {
				if (err) {
					return reject(err);
				}
				resolve();
			});
		});	
	});
}




module.exports = {
	linkTemplate: linkTemplate,
	template: template,
	npmEntry: npmEntry
}

