'use strict';

const fs = require('fs');
const path = require('path');
const ncp = require('ncp').ncp;
const rimraf = require('rimraf');

const paths = require('./paths');
const utils = require('./utils');


//
var debug = false;

function prepareDist(distPath) {
	return new Promise((resolve, reject) => {
		if (!fs.existsSync(distPath)) {
			fs.mkdirSync(distPath);
			resolve();
		}
		else {
			rimraf(distPath + '/*', (error) => {
				if (error) {
					console.error(error);
					return reject(error);
				}
				resolve();
			});
		}
	});
}

// build ./src/ to ./[distPath]/
function buildSource(distPath) {
	return new Promise((resolve, reject) => {
		// 
		prepareDist(distPath)

		.then(() => {
			const srcFolder = paths.srcFolderPath();
			fs.readdir(srcFolder, (error, items) => {
				if (error) {
					reject(error);
				}
				// for each item in srcFolder
				var promises = [];
				items.forEach((item) => {
					if (!utils.isIgnoreFile(srcFolder + '/' + item)) {
						promises.push(
							ncp(
								srcFolder + '/' + item, 
								distPath + '/' + item, 
								(error) => {
									if (error) {
										console.error(error);
										return reject(error);
									}
									resolve();
								}
							)
						);
					}
				});
				Promise.all(promises).then(() => {
					resolve();
				})
				.catch((error) => {
					reject(error);
				})
			});

		})	

		.catch((error) => {
			return reject(error);
		});
	});
}


// flag communicates to Monet whether this component can be previewed
function markPublished() {
	return new Promise((resolve, reject) => {
		var packageJson = require('../package.json');
		packageJson.genericSource.state = 'published';
		fs.writeFile('./package.json', JSON.stringify(packageJson, null, 2), (err) => {
			if (err) {
				return reject(err);
			}
			resolve();
		});
	});
}


function trackBranchCommit(version) {
	return new Promise((resolve, reject) => {
		var packageJson = require('../package.json');

		var trackerJsPath = './src/' + packageJson.genericSource.id + '.js';
		var genericSourceRegex = /(module.exports\s*=\s*)([^;]*)/;

		fs.readFile(trackerJsPath, 'utf8', (err, data) => {
			if (err) {
				return reject(err);
			}
			const genericSourceMatch = data.match(genericSourceRegex);
			if (!genericSourceMatch) {
				return reject(new Error('Could not parse Generic Source Json in ' + trackerJsPath));
			}
			var genericSourceJson = JSON.parse(genericSourceMatch[2]);
			genericSourceJson.version = version;

			// write updated json back to tracker
			var result = data.replace(
				genericSourceRegex, 
				'$1' + JSON.stringify(genericSourceJson, null, 2)
			);

			fs.writeFile(trackerJsPath, result, (err) => {
				if (err) {
					return reject(err);
				}
				resolve();
			});
		});	
	
	});

}


module.exports = {
	buildSource: buildSource,
	markPublished: markPublished,
	trackBranchCommit: trackBranchCommit
}

