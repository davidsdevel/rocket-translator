const {resolve} = require("path");

module.exports = {
	target:"node",
	node: {
		fs: "empty"
	},
	entry: "./src/cli",
	output: {
		path: resolve(__dirname, "lib"),
		filename: "index.js",
		libraryTarget:"commonjs"
	},
	resolve: {
		alias: {
			Core: resolve(__dirname, "src/core"),
			Commons: resolve(__dirname, "src/commons"),
			Const: resolve(__dirname, "src/const"),
			FileFunctions: resolve(__dirname, "src/file-functions"),
		},
		modules:[
			resolve(__dirname, "dist"),
			"node_modules"
		]
	}
}
