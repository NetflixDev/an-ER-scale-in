'use strict';

const argv = require('minimist')(process.argv.slice(2));
const path = require('path');

// set app path 
global.rootPath = path.resolve( __dirname ) + '/';

const paths = require('./lib/paths');
const testManager = require('./lib/test-manager');

const debug = false;
/*
    "test": "wct test/web-component.html --configFile wct.conf.json",
    "test-headless": "wct test/web-component.html --configFile wct-headless.conf.json"
*/
console.log(
	`CLI OPTIONS:\n` +
	`-------------------------------------------------------------------------\n` +
	` --tests			list of paths to tests\n` + 
	`						If this option is not specified, all tests will be run from:\n` +
	` 						${paths.testFolderPath()}\n\n` +

	` --headless		use headless Chrome to run specified tests\n` +
	`-------------------------------------------------------------------------`
);



// build "boilerplate test" files
new Promise((resolve, reject) => {
	console.log(`\nPreparing testing framework...`);

	// init
	let runHeadlessChrome = argv.cmd == 'headless';
	testManager.init({
		root: '../',
		verbose: debug,
		quiet: debug ? false : true,
		persistent: runHeadlessChrome ? false : true,
		browserOptions: {
			chromeOptions: {
				args: runHeadlessChrome ? ['headless'] : []
			}
		}
	})

	// assign test paths and execute
	.then(() => {
		if ('tests' in argv) {
			testManager.addPaths(
				argv.tests.split(/[,\s]+/)
			);
		}
		else  {
			testManager.addDirectory(
				paths.testFolderPath()
			);
		}
		return testManager.execute();
	})

	// handle results
	.then((testFailCount) => {
		if (testFailCount > 0) {
			reject(new Error('Some tests failed.'))
		}
		else {
			resolve();
		}
	})

	.catch((err) => {
		reject(err);
	});
})

// end
.catch((err) => {
	console.error(err);
});

