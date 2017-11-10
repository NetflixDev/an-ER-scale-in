const path = require('path');
var argv = require('minimist')(process.argv.slice(2));

// set app path 
global.rootPath = path.resolve( __dirname + '/..' ) + '/';

const paths = require('./paths');
const installer = require('./installer');
const gwd = require('./gwd');
const build = require('./build');
const publish = require('./publish');
const tracker = require('./tracker');

const debug = require('debug');
const log = debug('component:api')
if ('silence' in argv) {
	debug.disable(true);
}



// help
if (argv.help) {
	log(
		`CLI OPTIONS:\n` +
		`node ./lib/api.js\n` +
		`-------------------------------------------------------------------------------------------\n` +
		` --cmd	API COMMAND, options include:\n` +
		`    "install"     install git-hooks\n` +
		`    "build"       use GWD "manifest.json" to create component's "link file", "preview file", and "boilerplate tests file"\n` +
		`    "publish"     publish ${paths.srcFolderPath()} to ${paths.distFolderPath()},\n` +
		`                  mark generic-source as "published",\n` +
		`                  create GWD package at ${paths.distGwdPath()}\n` +
		`    "track"       saves branch/commit info (-v) to the Generic-Source-Tracker file \n\n` +
		
		` --silence, squelches console output\n` +
		`-------------------------------------------------------------------------------------------`
	);
	process.exit();
}

// api command
if (!('cmd' in argv)) {
	console.error('No API COMMAND (--cmd) specified');
	process.exit();
}




/* -- INSTALLATION ----
 *
 *		
 */
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




/* -- TRACKING ----
 *
 *		
 */
 else if (argv.cmd == 'track') {
	if (typeof argv.v === 'undefined') {
		console.error('API command "track" requires -v flag specifying version info');
		process.exit();
	}
	log(`Adding commit '${argv.v}' to Generic Source tracker JS`);
	tracker.trackBranchCommit(argv.v)
	.then(() => {
		log('\n');
	})
	.catch((err) => {
		console.error(err);
	});
}




/* -- BUILD ----
 *
 *		Creates ./src files from ./tmpl templates
 *		 - ./src/component_link.html
 *		 - ./src/index.html
 *		 - ./src/boilerplate_tests.html
 *		 - ./index.js: for NPM style depedencies
 */
else if (argv.cmd == 'build') {
	// load manifest
	gwd.loadGwdManifest()

	.then((manifest) => {

		// implement link template
		log('Implementing ' + paths.COMPONENT_LINK_FILENAME);
		build.linkTemplate(
			manifest,
			paths.tmplFolderPath() + paths.COMPONENT_LINK_FILENAME,
			paths.srcFolderPath() + paths.COMPONENT_LINK_FILENAME
		)

		// implement index preview template
		.then(() => {
			log('Implementing ' + paths.COMPONENT_PREVIEW_FILENAME);
			return build.template(
				manifest,
				paths.tmplFolderPath() + paths.COMPONENT_PREVIEW_FILENAME,
				paths.COMPONENT_LINK_FILENAME,
				paths.srcFolderPath() + paths.COMPONENT_PREVIEW_FILENAME
			);
		})

		// implement boilerplate-test template
		.then(() => {
			log('Implementing Web-Component in boilerplate tests');
			return build.template(
				manifest,
				paths.tmplFolderPath() + paths.BOILERPLATE_TESTS_FILENAME,
				'../' + paths.SRC_FOLDER + paths.COMPONENT_LINK_FILENAME,
				paths.testFolderPath() + paths.BOILERPLATE_TESTS_FILENAME
			)
		})

		// implement NPM entry
		// .then(() => {
		// 	log('Implementing NPM entry "./index.js"');
		// 	return build.npmEntry(
		// 		manifest,
		// 		paths.tmplFolderPath() + paths.NPM_ENTRY_FILENAME
		// 	);
		// })

		.catch((err) => {
			console.error(err);
		});
	})
	.catch((err) => {
		console.error(err);
	});	
}





/* -- PUBLISH ----
 *
 *		Creates ./dist files from ./src
 *		 - ./dist/src: for C20 preview & download
 *		 - ./dist/gwd: for Google Web Designer
 *
 *		Indicate C20-generic-source is "published"
 */
else if (argv.cmd == 'publish') {
	// load manifest
	gwd.loadGwdManifest()

	.then((manifest) => {
		// copy src to dist
		log(`Publishing Src package to: ${paths.distSrcPath()}`);
		publish.src(paths.distSrcPath())

		// mark generic-source as "published"
		.then(() => {
			log('Marking GenericSource.state as "published"');
			return tracker.markPublished();
		})

		// create gwd package: for integrating in GWD
		.then(() => {
			log(`Publishing GWD component to: ${paths.distGwdPath()}`);
			return gwd.publishComponent();
		})
		.catch((err) => {
			console.error(err);
		});
	})
	.catch((err) => {
		console.error(err);
	});
}

