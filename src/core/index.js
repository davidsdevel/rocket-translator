import { ReactStateManagement, VueStateManagement, AngularStateManagement } from "Core/StateManagement";
import Parser from "Core/JavascriptManagement";

/**
 * React Compiler
 * 
 * Function that take the HTML string and translate to React
 * 
 * @param {string} name Component Name
 * @param {string} html HTML String
 * @param {string} css CSS String
 *
 * @return {string}
 */
const ReactCompiler = (name, html, css) => {

	let RStateManagement = new ReactStateManagement();

	let parse = new Parser(); //JS Parser

	//Get all data from HTML string
	RStateManagement.statesFromJS = parse.states;

	//Parse Lifecycles
	RStateManagement.setLifecycle(parse.lifecycles, "r");

	RStateManagement.getHTMLString(html);	

	//Get Methods from JS and set to Data
	RStateManagement.getJsData(parse.functions, "r");

	RStateManagement.watchers = parse.watchers;

	RStateManagement.setVarsToStatesContent(parse.vars);

	const JSX = RStateManagement.filterHTML(html);
		
	//Template to Set All Data
	let template =
`import React, {Component} from "react";
${RStateManagement.importComponents}
class ${name || "MyComponent"} extends Component {
	${RStateManagement.componentData}
	render(){
		${RStateManagement.preRender}
		return(
			${JSX}
		)
	}
}
export default ${name || "MyComponent"};
`;
	return {
		main:template,
		components:RStateManagement.componentsContent
	};
};

/**
 * Vue Compiler
 * 
 * Function that take the HTML string and translate to Vue
 *
 * @param {String} name Component Name
 * @param {string} html HTML String 
 * @param {string} css CSS String
 * 
 * @return {string}
 */
const VueCompiler = (name, html, css) => {

	let VStateManagement = new VueStateManagement();

	let parse = new Parser(); //JS Parser

	// Set Styles
	let style = css !== "" ? `<style scoped>\n${css}</style>` : "";

	//Get states declarations from JS and set to Data
	VStateManagement.statesFromJS = parse.states;

	//Parse Lifecycles
	VStateManagement.setLifecycle(parse.lifecycles, "v");

	//Get all data from HTML string
	VStateManagement.getHTMLString(html);

	//Get Methods from JS and set to Data
	VStateManagement.getJsData(parse.functions, "v");
	
	VStateManagement.watchers = parse.watchers;
	
	VStateManagement.setVarsToStatesContent(parse.vars);

	var HTML = "";
	
	if (!global.RocketTranslator.jsx) {

		//Add new lines and idents to code beauty
		const pretty = VStateManagement
			.filterHTML(html)
			.split(/\n/)
			.map(e => {
				if (e) return `\t${e}\n`;
			})
			.join("");

		HTML = `<template>\n${pretty}</template>`;
		
	}
	//Template to Set All Data
	let component = 
`${HTML}
${VStateManagement.componentData(name, html)}
${style}`;

	return {
		main:component,
		components:VStateManagement.componentsContent
	};
};

/**
 * Angular Compiler
 * 
 * Function that take the HTML string and translate to Angular
 *
 * @param {String} name Component Name
 * @param {string} html HTML String 
 * @param {string} css CSS String
 * 
 * @return {string}
 */
const AngularCompiler = (name, html, css) => {

	const AStateManagement = new AngularStateManagement();

	const parse = new Parser(); //JS Parser

	// Set Styles
	let style = css !== "" ? `<style scoped>\n${css}</style>` : "";

	//Get states declarations from JS and set to Data
	AStateManagement.statesFromJS = parse.states;

	//Parse Lifecycles
	AStateManagement.setLifecycle(parse.lifecycles, "a");

	//Get all data from HTML string
	AStateManagement.getHTMLString(html);

	//Get Methods from JS and set to Data
	AStateManagement.getJsData(parse.functions, "a");
	
	AStateManagement.watchers = parse.watchers;
	
	AStateManagement.setVarsToStatesContent(parse.vars);
	
	//Add new lines and idents to code beauty
	let pretty = AStateManagement
		.filterHTML(html)
		.split(/\n/)
		.map(e => {
			if (e) return `\t${e}\n`;
		})
		.join("");

	const component = `import { Component${AStateManagement.props.length > 0 ? ", Input" : ""}} from '@angular/core';
${AStateManagement.components.map(e => `\nimport { ${e} } from "./components/${e}";`).join("")}

@Component({
	selector: '${AStateManagement.generateComponentName(name)}-root',
	template:\`${pretty}\`
})

export class ${name} {
	${AStateManagement.componentData}
}`;
	return {
		main:component,
		components:AStateManagement.componentsContent
	};
};

export {
	VueCompiler,
	AngularCompiler,
	ReactCompiler
};
