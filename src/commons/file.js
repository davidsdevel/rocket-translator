import {readFileSync} from "fs";

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

export default File;
