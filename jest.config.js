const {resolve} = require("path");

module.exports = {
	target:"node",
	mode:"production",
	node: {
		fs: "empty"
	},
	entry: {
		StateManagement: "./src/core/StateManagement/StateManagement.js",
		VueStateManagement: "./src/core/StateManagement/VueStateManagement.js"
	},
	output: {
		path: resolve(__dirname, "test"),
		filename: "[name].js",
		libraryTarget:"commonjs"
	}
}
