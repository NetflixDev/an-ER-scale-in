'use strict';

const ignoreFiles = [
	'__MACOSX',
	'.DS_Store'
];
function isIgnoreFile(path) {
	var filename = path.match(/[^\/]*$/)[0];
	for (var i in ignoreFiles) {
		if (isHiddenFile(filename))
			return true;
		if (filename.indexOf(ignoreFiles[ i ]) != -1) 
			return true;
	}
}
function isHiddenFile(filename) {
	if (filename.indexOf('.') == 0) {
		return true;
	}
}
function getIndent(tabs) {
	tabs = tabs || 2;
	return '\t'.repeat(tabs);
}

module.exports = {
	ignoreFiles: ignoreFiles,
	isIgnoreFile: isIgnoreFile,
	getIndent: getIndent
};



