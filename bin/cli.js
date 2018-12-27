#!/usr/bin/env node

process.title = "RocketJS"; //Process Title

//Const
const {VueCompiler, ReactCompiler, Components} = require("../Lib").core,
	  FF = require("../Lib/file-utils").TranslatorFileFunctions,
	  {join} = require("path"),
	  {realpathSync} = require("fs"),
	  cliDir = realpathSync(".");

const mode = process.argv[2]; //Get the mode to compile

if (mode === "-h" || !mode){
	//Help Commands
    console.log(
`	Usage: rocket [vue | react] <input-file> <output-folder>

    Commands:
        Translate to React:		react
        Translate to Vue:		vue
        Help:				--help | -h
        Version:			--version | -v`
    );
    process.exit(1); //Stop execution

} else if (
	mode === "vue" || 
	mode === "react"
) {

	var fileName;
	
	if (process.argv.length <= 3){
		console.log(`Please select a file to compile.`);
		process.exit(1);
	} else {
		fileName = join(cliDir, process.argv[3]); //Get the file path
	}

	//Dirname for the output folder
	const output = process.argv[4] ? join(cliDir, process.argv[4]) : join(cliDir, "dist");
	

	//Instance the File Functions Class
	const functions = new FF();
	functions.setParams(fileName, output); //Set Input file and Output folder

	let componentName = process.argv[3].match(/((\w*-)*\w*|\w*)(?=.html$)/); //Get the name from the file

	var name = componentName[0].split("-").map(e=>{
        return e[0].toUpperCase() + e.slice(1);
    }).join(""); //convert to CamelCase
	
	var file = functions.getFile(); //Get the html file data
	var js = functions.getJs(); //Get the JS file data
	var css = functions.getCSS(); //Get the CSS file data
	
	var compiled;
	if (mode === "vue"){
		compiled = {
			name,/*File Name*/
			content: VueCompiler(name, file, css, js),/*File Content*/
			type: "vue"
		}
	} else if (mode === "react"){
		compiled = {
			name,
			content: ReactCompiler(name, file, css, js),
			type: "react"
		}
	} else {
		console.error("Invalid Mode.");
		process.exit(1);
	}
	functions.writeFile(compiled); //Append Files to the output folder
	functions.writeComponents(name, mode, Components())
	console.log(`Thanks for use html compiler.\n\nOpen "${output}" to view your files.`);
} else if(mode === "--version" || mode === "-v") {
	let {version} = require("../package.json");
	console.log("v"+version);
}
