const {ReactStateManagement, VueStateManagement} = require("./StateManagement"),
      Parser = require("./JavascriptManagement");

var Components = [];

/**
 * React Compiler
 * 
 * Function that take the HTML string and traslate that to Vue
 * 
 * @param {string} name The Component Name
 * @param {string} html The HTML String
 * @param {string} css The CSS String
 * @param {string} js The Javascript String
 *
 * @return {string}
 */
exports.ReactCompiler = (name, html, css, js) =>{

	let parse = new Parser(js); //JS Parser

	//Get all data from HTML string
	ReactStateManagement.getHTMLString(html);

	//Get states declarations from JS and set to Data
	ReactStateManagement.statesFromJS = parse.states;

	//Get Methods from JS and set to Data
	ReactStateManagement.getJsData(parse.functions, "r");

	ReactStateManagement.watchers = parse.watchers;

	ReactStateManagement.setVarsToStatesContent(parse.vars);

	Components = ReactStateManagement.componentsContent;

	//Add new lines and idents to code beauty
	let pretty = ReactStateManagement
		.setReactFilterHTMLState(html)
		.split(/\n/)
		.map(e=>{
			if (e) return "\t\t\t"+e+"\n";
		})
		.join("");
		
	//Template to Set All Data
	let template =
`import React, {Component} from "react"
${ReactStateManagement.setReactComponents()}
class ${name || "MyComponent"} extends Component {
	${ReactStateManagement.setReactStateToTemplate()}
	render(){
		${ReactStateManagement.setPrerenderLogical()}
		return(
${pretty}\t\t)
	}
}
export default ${name || "MyComponent"};
`
	return template
}


/**
 * Vue Translator
 * 
 * Function that take the HTML string and traslate that to Vue
 *
 * @param {string} html The HTML String 
 * @param {string} css The CSS String
 * @param {string} js The Javascript String
 * @return {string}
 */
exports.VueCompiler = (name, html, css, js) =>{

	let parse = new Parser(js); //JS Parser

	let style; // Declare empty var to asign styles

	//If param 'css' is not empty, set style tags to final render 
	css !== "" ? style = `<style scoped>\n${css}</style>` : style = "";

	//Get all data from HTML string
	VueStateManagement.getHTMLString(html);

	//Get states declarations from JS and set to Data
	VueStateManagement.statesFromJS = parse.states;

	//Get Methods from JS and set to Data
	VueStateManagement.getJsData(parse.functions, "v");

	VueStateManagement.watchers = parse.watchers;

	VueStateManagement.setVarsToStatesContent(parse.vars);
	
	Components = VueStateManagement.componentsContent;

	
	//Add new lines and idents to code beauty
	let pretty = VueStateManagement
		.setVueFilterHTMLState(html)
		.split(/\n/)
		.map(e=>{
			if (e) return "\t"+e+"\n";
		})
		.join("");
	
	//Template to Set All Data
	let template = 
`<template>
${pretty}
</template>
<script>
${VueStateManagement.getVueDataTemplate(name)}
</script>
${style}`;
	return template
}

/**
 * Components
 *
 * Function that return the Main Component's Components.
 *
 * @return {String}
 */
exports.Components = () => {
	return Components;
};