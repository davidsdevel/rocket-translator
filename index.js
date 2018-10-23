#!/usr/bin/env node
process.title = "HTML Translator";

const VueCompiler = require("./Lib").VueCompiler,
	  ReactCompiler = require("./Lib").ReactCompiler,

	  FF = require("./utils").TranslatorFileFunctions,
	  {startServer} = require("./server"),

	  {join} = require("path");

//React or Vue
const mode = process.argv[2];
if (mode === "-h" || mode === "--help" || !mode){
    console.log(
    `Use: node index.js [command] [input-file] [output-folder]
    	  node index.js -s [port]

    Commands:
        Compile to react:    --react | -r
        Compile to vue:      --vue   | -v
        Help:                --help  | -h`
    )
    process.exit(1);
} else if (
	mode === "-v" || 
	mode === "--vue" || 
	mode === "-r" || 
	mode === "--react"
	) {

	var entryPoint;
	//dirname for html file
	
	if (process.argv.length <= 3){
		console.log(`Please select a file to compile.`);
		process.exit(1);
	} else {
		entryPoint = join(__dirname, process.argv[3]);
	}
	//dirname for output folder
	const output = process.argv[4] ? join(__dirname, process.argv[4]) : join(__dirname, "dist");
	
	const functions = new FF();
	functions.setParams(entryPoint, output);

	let input = process.argv[3].match(/\w*(?=.html$)/);
	var name = input[0][0].toUpperCase() + input[0].slice(1);
	
	var file = functions.getFile();
	var js = functions.getJs();
	var css = "";
	
	var compiled = {};
	if (mode === "--vue" || mode === "-v"){
		compiled = {
			content: VueCompiler(name, file, css, js),
			type: "vue"
		}
	} else if (mode === "--react" || mode === "-r"){
		compiled = {
			content: ReactCompiler(name, file, css, js),
			type: "react"
		}
	} else {
		console.error("Invalid Mode.");
		process.exit(1);
	}
	functions.writeFile(compiled);
	console.log(`Thanks for use html compiler.\n\nOpen "${output}" to view your files.`);
} else if(mode === "--server" || "-s"){
	let port = process.argv[3] || 8080;
	startServer(port);
} else {
	console.error(`Invalid Mode "${mode}"\n\nValid modes are -v and -r.\nPlease attemp with thats.`);
}