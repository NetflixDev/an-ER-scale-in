'use strict';

const fs = require('fs');
const path = require('path');
const ncp = require('ncp').ncp;
const rimraf = require('rimraf');

const paths = require('./paths');
const utils = require('./utils');

const GIT_HOOKS_PATH = './.git/hooks/';
const PROJECT_HOOKS_PATH = './hooks/';
const PRE_COMMIT_HOOK = 'pre-commit';

const MANIFEST_JSON_PATH = './src/manifest.json';

//
var debug = false;

function installGitHooks() {
	return new Promise((resolve, reject) => {
		// pre-commit hook
		if (fs.existsSync(GIT_HOOKS_PATH + PRE_COMMIT_HOOK)) {
			console.log('WARNING: "' + PRE_COMMIT_HOOK + '" already exists at "./.git/hooks/" - not installing project pre-commit hook');
			return resolve();
		}
		ncp(
			PROJECT_HOOKS_PATH + PRE_COMMIT_HOOK,
			GIT_HOOKS_PATH + PRE_COMMIT_HOOK, 
			(err) => {
				if (err) {
					console.log('WARNING: "' + PRE_COMMIT_HOOK + '" not installed: ', err);
				}
				fs.chmodSync(GIT_HOOKS_PATH + PRE_COMMIT_HOOK, '755');
				console.log('"' + PRE_COMMIT_HOOK + '" has been installed at "./.git/hooks/"');
				resolve();
			}
		);
	});
}


/* -- ATTACH GENERIC SOURCE ---------------------------------
 *
 *		The idea here is to persist the "genericSource" property from "package.json"
 *		so that this component can be tracked throughout the Monet ecosystem.
 *
 *		In the case of GWD builds, the tracker-file is added as a JS dependency in 
 *		the manifest.json, so that GWD will properly package the tracker in the 
 *		published source.
 *
 *		Future Generic-source scaffolds will need to manage inclusion of the 
 *		tracker file on their own.
 *
 */
function attachGenericSource() {
	console.log('Attaching Generic-source tracker in ./src/');

	// if this is a GWD component
	if (fs.existsSync(MANIFEST_JSON_PATH)) {
		return attachTrackerToManifest();
	}

	// if this is another type of component...
	else {
		return Promise.resolve();
	}
}


function attachTrackerToManifest() {
	return new Promise((resolve, reject) => {
		console.log(' - located GWD `manifest.json`, adding tracker file as JS dependency');
		// load manifest
		fs.readFile(MANIFEST_JSON_PATH, (err, data) => {
			if (err) {
				return reject(err);
			}
			var manifestJson = JSON.parse(data);
			var trackerFilename = getTrackerFilename();

			// add tracker to manifest
			if ('files' in manifestJson) {
				if ('js' in manifestJson.files) {
					var hasId = false;
					manifestJson.files.js.forEach((file) => {
						if (file == trackerFilename) {
							hasId = true;
							return;
						}
					});
					if (!hasId) {
						manifestJson.files.js.push(trackerFilename);
					}
				}
				else {
					manifestJson.files.js = [
						trackerFilename
					];
				}
			}
			else {
				manifestJson.files = {
					js: [
						trackerFilename
					]
				}
			}

			// write updated manifest
			fs.writeFile(
				MANIFEST_JSON_PATH, 
				JSON.stringify(manifestJson, null, 2), 
				(err) => {
					if (err) {
						return reject(err);
					}
					resolve();
				}
			);
		});
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


module.exports = {
	installGitHooks: installGitHooks,
	attachGenericSource: attachGenericSource
}

