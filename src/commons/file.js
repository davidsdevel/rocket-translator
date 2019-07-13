const {readFileSync} = require("fs");

class File {
	/**
	 * Read File As String
	 * 
	 * @static
	 * @param {String} path 
	 * 
	 * @return {String}
	 */
	static readFileAsString(path) {
		const buff = readFileSync(path);
		return buff.toString();
	}
}

module.exports = File;
