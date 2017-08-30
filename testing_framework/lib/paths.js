var path = require('path');

/* -- Pathing -----------------------------------------------
 *
 *	 NOTE: All paths are relative to `global.rootPath`
 *
 */
var self = module.exports = {	

	TEST_FOLDER: 'test/',
	WCT_CONFIG_FILENAME: 'wct.conf.json',

	testFolderPath: () => {
		return `../${self.TEST_FOLDER}`;
	},


	escapePath: (path) => {
		return path.replace( ' ', '\ ' )
			.replace( "'", "\\'" )
			.replace( '(', '\(' )
			.replace( ')', '\)' )
			.replace( '-', '\-' )
			.replace( '&', '\&' );
	},
	absFile: (subpath) => {
		return path.resolve(global.rootPath + subpath);
	},
	absPath: (subpath) => {
		return self.absFile(subpath) + '/';
	}
};


