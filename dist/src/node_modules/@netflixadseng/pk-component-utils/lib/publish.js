const fs = require('fs');
const path = require('path');
const ncp = require('ncp').ncp;
const rimraf = require('rimraf');

const paths = require('./paths');
const utils = require('./utils');

const debug = require('debug');
const log = debug(require('../package.json').name + ':publish')

const readmePath = './README.md';

function entry() {
	return new Promise((resolve, reject) => {

	});
}

// build ./src/ to ./[distPath]/
function src(distPath) {
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

				promises.push(ncp(readmePath, `${distPath}/README.md`, error => {
					if (error) {
						console.error(error);
						return reject(error);
					}
				}, resolve()));

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






module.exports = {
	src: src
}

