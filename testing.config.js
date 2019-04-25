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
	optimization: {
		minimize: true
	},
	output: {
		path: resolve(__dirname, "test"),
		filename: "[name].js",
		libraryTarget:"commonjs"
	},
	resolve: {
		alias: {
			Core: resolve(__dirname, "src/core"),
			Commons: resolve(__dirname, "src/commons"),
			Const: resolve(__dirname, "src/const"),
			FileFunctions: resolve(__dirname, "src/file-functions")
		}
	}
};
