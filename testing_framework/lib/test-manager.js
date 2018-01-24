'use strict';

const fs = require('fs');
const process = require('process');
const spawn = require('child_process').exec;
const lodash = require('lodash');
const keypress = require('keypress');
const terminate = require('terminate');


const paths = require('./paths');
const utils = require('./utils');


//
var debug = false;


/* 
 * "wct" = https://github.com/Polymer/web-component-tester
 *		-	See issues #561
 *		- 	In order to give control to this CLI script, process arguments are programatically
 *			assigned and saved to wct.conf.json
 */
function loadWctConf() {
	return new Promise((resolve, reject) => {
		fs.readFile(paths.absFile(paths.WCT_CONFIG_FILENAME), 'utf-8', (err, contents) => {
			if (err) {
				reject(err);
			}
			resolve(
				JSON.parse(contents)
			);
		});
	});
}
function saveWctConf(json) {
	return new Promise((resolve, reject) => {
		const output = JSON.stringify(json, null, 2);
		console.log(output);
		fs.writeFile(paths.absFile(paths.WCT_CONFIG_FILENAME), output, (err) => {
			if (err) {
				reject(err);
			}
			resolve();
		});
	});
}

// "wct" seems to require relative context....so this sets working directory to that of global script
process.chdir(
	paths.escapePath(global.rootPath)
);



var testPaths, 
	testIndex,
	output,
	testFailCount;
//
function executeNextTest() {
	return new Promise((resolve, reject) => {
		// run test
		new Promise((resolve, reject) => {
			if (testIndex == testPaths.length) {
				console.log(' - All tests complete -');
				return resolve('complete');
			}
			const path = testPaths[testIndex];
			if (utils.isIgnoreFile(path)) {
				return resolve('next');
			}
			console.log('Executing test at:', path);
			console.log(' - PRESS the SPACE-BAR to cancel this test!!');
			console.log(Array(160).join('-'));

			// spawn wct 
			var child = spawn('wct', [
				paths.escapePath(paths.absPath(path)),
				'configFile', paths.escapePath(
					paths.absFile(paths.WCT_CONFIG_FILENAME)
				), {
					detached: true
				}
			]);

			// handle input
			keypress(process.stdin);
			process.stdin.on('keypress', (char, key) => {
				if (key.ctrl && key.name == 'c') {
					terminate(child.pid);
					process.exit();
				}
				else if(key.name == 'space') {
					terminate(child.pid);
				}
			});
			process.stdin.setRawMode(true);
			process.stdin.resume();

			// handle output
			child.stdout.on('data', (data) => {
				output += data;
				console.log(data);
			});
			child.stderr.on('data', (data) => {
				if (debug) {
					console.log(data);
				}
			});
			child.stdout.on('close', () => {
				console.log('TEST COMPLETE');
				const testResultMatch = output.match(/\d+\/\d+\/\d+/);
				if (testResultMatch) {
					var results = testResultMatch[0].split('/').map((result) => { 
						parseInt(result); 
					});
					if (results[1] > 0 || results[2] > 0) {
						testFailCount++;
					}
				}
				resolve('next');
			});

		})

		// recurse to next test
		.then((type) => {
			if (type == 'next') {
				testIndex++;
				return executeNextTest();
			}
			else Promise.resolve();
		})

		// finish
		.then(() => {
			resolve(testFailCount);
		});
	});
}






// add all files in a directory to be tested
function addDirectory(path) {
	const files = fs.readdirSync(paths.absPath(path));
	files.forEach((file) => {
		addFile(path + file);
	});
}

// add file to be tested
function addFile(path) {
	console.log('Adding test path:', path);
	testPaths.push(
		path
	);
}

// set test paths
function addPaths(paths) {
	console.log('Adding test paths:', paths);
	testPaths = paths;
}




// initialize test-manager
function init(options) {
	testPaths = [];
	return new Promise((resolve, reject) => {
		loadWctConf()

		.then((json) => {
			return saveWctConf(
				lodash.assign({}, json, options)
			);
		})

		.then(() => {
			resolve();
		})

		.catch((error) => {
			reject(error);
		})
	});
}


function execute() {
	testIndex = 0;
	output = '';
	testFailCount = 0;
	return executeNextTest();
}



module.exports = {
	init: init,
	addFile: addFile,
	addDirectory: addDirectory,
	addPaths: addPaths,
	execute: execute
}

