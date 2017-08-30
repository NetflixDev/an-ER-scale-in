'use strict';

const path = require('path');
var argv = require('minimist')(process.argv.slice(2));

// set app path 
global.rootPath = path.resolve( __dirname + '/..' ) + '/';

const paths = require('./paths');
const installer = require('./installer');
const gwdImplementer = require('./gwd-implementer');

const builder = require('./builder');


// log
var log = 'silence' in argv ? false : true;
gwdImplementer.setLog(log);

// help
if (argv.help) {
	console.log(
		`CLI OPTIONS:\n` +
		`node ./lib/api.js\n` +
		`-------------------------------------------------------------------------------------------\n` +
		` --cmd	API COMMAND, options include:\n` +
		`		"install" 	install git-hooks\n\n` +

		` 		"build" 		use GWD "manifest.json" to create component's "link file", "preview file", and "boilerplate tests file"\n\n` +
		
		` 		"publish"	publish ${paths.srcFolderPath()} to ${paths.distFolderPath()},\n` +
		`				mark generic-source as "published",\n` +
		`				create GWD package at ${paths.distGwdPath()}\n\n` +

		`		"track" 	saves branch/commit info (-v) to the Generic-Source-Tracker file \n\n` +
		
		` --silence 		squelches console output\n` +
		`-------------------------------------------------------------------------------------------`
	);
	process.exit();
}

// api command
if (!('cmd' in argv)) {
	console.error('No API COMMAND (--cmd) specified');
	process.exit();
}



// installation
if (argv.cmd == 'install') {

	// install git hooks
	installer.installGitHooks([
		'pre-commit'
	])

	// add generic-source data to component
	.then(() => {
		return installer.attachGenericSource()
	})
	.catch((err) => {
		console.error(err);
	});
}

// tracking
else if (argv.cmd == 'track') {
	if (typeof argv.v === 'undefined') {
		console.error('API command "track" requires -v flag specifying version info');
		process.exit();
	}
	if (log) console.log(`\nAdding commit ${argv.v} to Generic Source tracker JS`);
	builder.trackBranchCommit(argv.v)
	.then(() => {
		if (log) console.log('\n');
	})
	.catch((err) => {
		console.error(err);
	});
}


// building and publishing
else if (argv.cmd == 'build' || argv.cmd == 'publish') {

	// load manifest
	gwdImplementer.loadGwdManifest(
		paths.srcFolderPath() + paths.GWD_MANIFEST_JSON_FILENAME
	)

	// build: "link", "preview", "boilerplate-test" files 
	.then((manifest) => {
		// implement link template
		if (log) console.log('\nImplementing ' + paths.COMPONENT_LINK_FILENAME);
		return gwdImplementer.implementLinkTemplate(
			manifest,
			paths.tmplFolderPath() + paths.COMPONENT_LINK_FILENAME,
			paths.srcFolderPath() + paths.COMPONENT_LINK_FILENAME
		)
		// implement preview template
		.then(() => {
			if (log) console.log('\nImplementing ' + paths.COMPONENT_PREVIEW_FILENAME + ' as ' + paths.srcFolderPath() + paths.PREVIEW_FILENAME);
			return gwdImplementer.implementTemplate(
				manifest,
				paths.tmplFolderPath() + paths.COMPONENT_PREVIEW_FILENAME,
				paths.COMPONENT_LINK_FILENAME,
				paths.srcFolderPath() + paths.PREVIEW_FILENAME
			);
		})
		// implement boilerplate-test template
		.then(() => {
			if (log) console.log('\nImplementing Web-Component in boilerplate tests');
			return gwdImplementer.implementTemplate(
				manifest,
				paths.tmplFolderPath() + paths.BOILERPLATE_TESTS_FILENAME,
				'../' + paths.SRC_FOLDER + paths.COMPONENT_LINK_FILENAME,
				paths.testFolderPath() + paths.BOILERPLATE_TESTS_FILENAME
			)
		})
		.catch((error) => {
			return Promise.reject(error);
		});
	})


	// publish distribution files to ./dist/
	.then(() => {
		if (argv.cmd == 'publish') {
			return new Promise((resolve, reject) => {
				// create src package: for preview, download, and implementation
				if (log) console.log(`\nPublishing Src package to: ${paths.distSrcPath()}`);
				builder.buildSource(
					paths.distSrcPath()
				)

				// mark generic-source as "published"
				.then(() => {
					if (log) console.log('\nMarking GenericSource.state as "published"');
					return builder.markPublished();
				})

				// create gwd package: for integrating in GWD
				.then(() => {
					if (log) console.log(`\nPublishing GWD component to: ${paths.distGwdPath()}`);
					return gwdImplementer.publishComponent();
				})

				.catch((err) => {
					reject(err);
				})
			});
		}
	})
	.then(() => {
		if (log) console.log('\n');
	})
	.catch((err) => {
		console.error(err);
	});
}

