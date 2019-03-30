class Utils {
	/**
	 * Is Upper Case
	 * 
	 * Return true is letter is Upper Case
	 * 
	 * @static
	 * @param {String} letter
	 * 
	 * @return {String}
	 */
	static isUpperCase(letter) {
		return letter === letter.toUpperCase();
	}
}

module.exports = Utils;
