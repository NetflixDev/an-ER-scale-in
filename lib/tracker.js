const fs = require('fs');
const path = require('path');
const walk = require('walk');

const paths = require('./paths');

const debug = require('debug');
const log = debug('component:tracker');



// flag communicates to Monet whether this component can be previewed
function markPublished() {
	return new Promise((resolve, reject) => {
		var packageJson = require('../package.json');
		packageJson.genericSource.state = 'published';
		packageJson.genericSource.updated = new Date().getTime();
		fs.writeFile('./package.json', JSON.stringify(packageJson, null, 2), (err) => {
			if (err) {
				return reject(err);
			}
			resolve();
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





// find the tracker file for this package and update the version
function trackBranchCommit(version) {
	return new Promise((resolve, reject) => {
		var packageJson = require('../package.json');
		var promises = [];
		walk.walk('./src')
		.on('file', (root, stat, next) => {
			if (stat.name == packageJson.genericSource.id + '.js') {
				promises.push(
					updateTrackerVersion(
						root + '/' + stat.name,
						version
					)
				);
			}
			next();
		})
		.on('errors', function(entry, stat) {
			reject(new Error('Looking for gs-tracker files:\n', stat[0].error.Error));
		})
		.on('end', function() {
			return Promise.all(promises).then(() => {
				resolve();
			});
		});		
	});
}



function updateTrackerVersion(trackerJsPath, version) {
	var genericSourceRegex = /(module.exports\s*=\s*)([^;]*)/;

	return new Promise((resolve, reject) => {
		fs.readFile(trackerJsPath, 'utf8', (err, data) => {
			if (err) {
				return reject(err);
			}
			// parse tracker json (it's actually javascript so GWD can load it as a <script>)
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
	})
}


module.exports = {
	markPublished: markPublished,
	getTrackerFilename: getTrackerFilename,
	trackBranchCommit: trackBranchCommit
}