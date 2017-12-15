const fs = require('fs')
const path = require('path')
const walk = require('walk')
const muffle = require('muffle')
const ghUser = require('github-current-user')

const paths = require('./paths')

const debug = require('debug')
const log = debug(require('../package.json').name + ':tracker')

// flag communicates to Monet whether this component can be previewed
function markPublished(packageJson) {
	return new Promise((resolve, reject) => {
		packageJson = packageJson || require('../package.json')
		packageJson.genericSource.state = 'published'
		packageJson.genericSource.updated = new Date().getTime()
		fs.writeFile('./package.json', JSON.stringify(packageJson, null, 2) + '\n', err => {
			if (err) {
				return reject(err)
			}
			resolve(packageJson)
		})
	})
}

// update the username
function markUserAction(packageJson) {
	return new Promise((resolve, reject) => {
		getGithubUser()
			.then(username => {
				packageJson = packageJson || require('../package.json')
				packageJson.genericSource.username = username
				packageJson.genericSource.updated = new Date().getTime()
				fs.writeFile('./package.json', JSON.stringify(packageJson, null, 2) + '\n', err => {
					if (err) {
						log('Unable to determine current GitHub user - SSH key is likely password protected.')
						return reject(err)
					}
					resolve(packageJson)
				})
			})
			.catch(err => {
				reject(err)
			})
	})
}

function getGithubUser() {
	return new Promise((resolve, reject) => {
		muffle()
		ghUser.verify((err, verified, username) => {
			muffle.unmuffle()
			if (err) {
				return reject(err)
			}
			resolve(username)
		})
	})
}

// update the version
function markBranchCommit(packageJson, version) {
	return new Promise((resolve, reject) => {
		packageJson = packageJson || require('../package.json')
		packageJson.genericSource.version = version
		fs.writeFile('./package.json', JSON.stringify(packageJson, null, 2) + '\n', err => {
			if (err) {
				return reject(err)
			}
			resolve(packageJson)
		})
	})
}

function updateTracker(packageJson) {
	return new Promise((resolve, reject) => {
		var genericSourceRegex = /(module\.exports\s*=\s*)([^]*?\n\})/

		// look for generic source tracker files in ./src
		walk
			.walk('./src')
			.on('file', (root, stat, next) => {
				if (stat.name == packageJson.genericSource.id + '.js') {
					const trackerJsPath = root + '/' + stat.name
					fs.readFile(trackerJsPath, 'utf8', (err, data) => {
						if (err) {
							return reject(err)
						}
						// write updated generic-source-json back to tracker
						var result = data.replace(genericSourceRegex, '$1' + JSON.stringify(packageJson.genericSource, null, 2))
						fs.writeFile(trackerJsPath, result, err => {
							if (err) {
								return reject(err)
							}
						})
					})
				}
				next()
			})
			.on('errors', function(entry, stat) {
				reject(new Error('Looking for gs-tracker files:\n', stat[0].error.Error))
			})
			.on('end', function() {
				resolve()
			})
	})
}

module.exports = {
	markPublished: markPublished,
	markUserAction: markUserAction,
	markBranchCommit: markBranchCommit,
	updateTracker: updateTracker
}
