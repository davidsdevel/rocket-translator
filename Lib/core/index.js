import { ReactStateManagement, VueStateManagement } from "./StateManagement";
import Parser from "./JavascriptManagement";
import setErrorHandler from "./ErrorManagement";

/**
 * Array of Main Component's Components.
 */
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
const ReactCompiler = (name, html, css, js) => {

	let RStateManagement = new ReactStateManagement();

	let parse = new Parser(js); //JS Parser

	//Get all data from HTML string
	RStateManagement.getHTMLString(html);

	//Get states declarations from JS and set to Data
	RStateManagement.statesFromJS = parse.states;

	//Get Methods from JS and set to Data
	RStateManagement.getJsData(parse.functions, "r");

	RStateManagement.watchers = parse.watchers;

	RStateManagement.setVarsToStatesContent(parse.vars);

	Components = RStateManagement.componentsContent;

	//Add new lines and idents to code beauty
	let pretty = RStateManagement
		.setReactFilterHTMLState(html)
		.split(/\n/)
		.map(e => {
			if (e) return `\t\t\t${e}\n`;
		})
		.join("");
		
	//Template to Set All Data
	let template =
`import React, {Component} from "react"
${RStateManagement.setReactComponents()}
class ${name || "MyComponent"} extends Component {
	${RStateManagement.setReactStateToTemplate()}
	render(){
		${RStateManagement.setPrerenderLogical()}
		return(
${pretty}\t\t)
	}
}
export default ${name || "MyComponent"};
`;
	return template;
};


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
const VueCompiler = (name, html, css, js) => {

	let VStateManagement = new VueStateManagement();

	let parse = new Parser(js); //JS Parser

	let style = css !== "" ? `<style scoped>\n${css}</style>` : ""; // Set Styles

	//Get all data from HTML string
	VStateManagement.getHTMLString(html);

	//Get states declarations from JS and set to Data
	VStateManagement.statesFromJS = parse.states;

	//Get Methods from JS and set to Data
	VStateManagement.getJsData(parse.functions, "v");

	VStateManagement.watchers = parse.watchers;

	VStateManagement.setVarsToStatesContent(parse.vars);
	
	Components = VStateManagement.componentsContent;

	
	//Add new lines and idents to code beauty
	let pretty = VStateManagement
		.setVueFilterHTMLState(html)
		.split(/\n/)
		.map(e => {
			if (e) return `\t${e}\n`;
		})
		.join("");
	
	//Template to Set All Data
	let template = 
`<template>
${pretty}
</template>
<script>
${VStateManagement.getVueDataTemplate(name)}
</script>
${style}`;
	return template;
};

export {
	setErrorHandler,
	Components,
	VueCompiler,
	ReactCompiler
};
