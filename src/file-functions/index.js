const {
	existsSync,
	mkdirSync,
	writeFileSync
} = require("fs");
const { join } = require("path");
const FileUtils = require("../commons/file");
const {VueCompiler, ReactCompiler, AngularCompiler} = require("../core");
const clc = require("cli-color");
const globalList = require("../const/Globals");
const {transform} = require("babel-core");

const {readFileAsString} = FileUtils;

/**
  * File Functions to CLI
  * 
  * @class
  */
class TranslatorFileFunctions {
	contructor() {
		//Initialize propierties
		this._file = undefined;
		this._entry = undefined;
		this._out = undefined;
		this._js = undefined;
		this._css = undefined;
	}
	/**
	 * Set Params
	 * 
	 * Set Input file and output folder
	 * 
	 * @public
	 * @param {String} fileName 
	 * @param {String} output 
	 */
	setParams(fileName, output) {
		this._entry = fileName;
		this._out = output;
		this._js = new Array();
		this._css = new Array();
		this._findFile(fileName); //Find all files
	}
	/**
	 * File (getter)
	 * 
	 * Return the HTML file
	 * 
	 * @public
	 * @return {String}
	 */
	get file() {
		return this._file;
	}
	/**
	 * JS (getter)
	 * 
	 * Return the Javascript file
	 * 
	 * @public
	 * @return {String}
	 */
	get JS() {
		if (this._js !== undefined)
			return this._js.join("\r\n");

		return "";
	}
	/**
	 * Filter Javascript Data File
	 * 
	 * Get the HTML file and create a temp file that export the Javascript Data
	 * 
	 * @public
	 * @param {String} js 
	 */
	filterJavascriptDataFile(js) {
		if (!js)
			return;

		function filterJavascript(js) {
			var data = js;
			if (/^(var|let|const)/.test(js))
				data = data.replace(/=/, ":");

			if (/^async/.test(js))
				data = data.replace(/\s*function\s*/, " ");

			return data.replace(/;$/, "")
				.replace(/^(var|let|const|function)/, "");
		}

		var {code} = transform(js, {
			compact: false
		});
		const splitted = code.split(/\n(?=const|var|let|function|async)/).filter(e => e);
		
		var final = splitted.map(data => filterJavascript(data)).join(",\n");

		global.RocketData = code;
		global.RocketFunction = final;

		const defineGlobalsFunctionString = splitted.filter(e => /(const|var|let|function)\s*defineGlobals/.test(e))[0];
		global.RocketGlobals = filterJavascript(defineGlobalsFunctionString || "");

		this._filterGlobals();
	}
	/**
	 * Filter Globals
	 * 
	 * Get the globals list, then replace on temp data file and create a global's global list
	 * 
	 * @private
	 */
	_filterGlobals() {
		if (!global.RocketGlobals)
			return;

		const {defineGlobals} = new Function(`return {${global.RocketGlobals}}`)();
		
		const globals = Object.assign([], globalList, defineGlobals !== undefined ? defineGlobals() : []);
		
		var fileData = global.RocketFunction;

		globals.forEach(glob => {
			fileData = fileData.replace(new RegExp(`:\\s*${glob}`), `: "${glob}"`);
		});

		global.RocketFunction = fileData;
	}
	/**
	 * CSS (getter)
	 * 
	 * Return the Css file
	 * 
	 * @public
	 * @return {String}
	 */
	get CSS() {
		if (this._css !== undefined)
			return this._css.join("\r\n").replace(/^(\n|\r|\r\n)\t*/g, "");
		
		return "";
	}
	/**
	 * Write Components
	 * 
	 * Append components to the Main Component folder
	 * 
	 * @public
	 * @param {String} MainComponentName
	 * @param {Array} ComponentsArray
	 */
	writeComponents(MainComponentName, type, ComponentsArray) {
		if (ComponentsArray.length > 0) {
			const componentsFolder = join(this._out, MainComponentName, "components");
			if (!existsSync(componentsFolder))
				mkdirSync(componentsFolder);

			for (let i = 0; i <= ComponentsArray.length - 1; i++) {
				var {name, content} = ComponentsArray[i];
				var mime;
				
				switch(type) {
				case "vue":
					content = VueCompiler(name, content.split(/\n/).map(e => e.replace(/\t\t/, "")).join("\n"), "", this.getJs()).main;
					mime = "vue";
					break;
				case "react":
					content = ReactCompiler(name, content.split(/\n/).map(e => e.replace(/\t\t/, "")).join("\n"), "", this.getJs()).main;
					mime = "jsx";
					break;
				case "angular":
					content = AngularCompiler(name, content.split(/\n/).map(e => e.replace(/\t\t/, "")).join("\n"), "", this.getJs()).main;
					mime = "component.ts";
					break;
				default: 
					console.error(`Type must be '${clc.whiteBright("react")}' or '${clc.whiteBright("vue")}'"`);
					process.exit(1);
				}
				writeFileSync(join(componentsFolder, `${name}.${mime}`), content);
			}
		}
	}
	/**
	 * Write File
	 * 
	 * Append files to the output folder
	 * 
	 * @public
	 * @param {Object} param0
	 */
	writeFile({content, type, name}) {
		if (!existsSync(this._out))
			mkdirSync(this._out);

		var mime;
		switch (type) {
		case "vue":
			mime = "vue"; //Set "vue" extension
			break;
		case "react":
			mime = "jsx"; //Set "jsx" extension
			break;
		case "angular":
			mime = "component.ts";
			break;
		default:
			throw new Error(`Invalid Type ${type}`);
		}

		//Component Folder Name
		const folderPath = join(this._out, name);

		if (!existsSync(folderPath))
			mkdirSync(folderPath);

		//Component Path
		const filePath = join(folderPath, `index.${mime}`);
		writeFileSync(filePath, content);

		if (type === "react" && !global.allowSSR)
			writeFileSync(join(folderPath, `${name}.css`), this.CSS);
	}
	/**
	 * Find File
	 * 
	 * Get the path and find if the file exist
	 * 
	 * @param {String} pathname
	 */
	_findFile(pathname) {
		if (!existsSync(pathname)) {
			console.log(clc.redBright("\nError!!!\n"));
			console.error(clc.whiteBright("File does not exist."));
			process.exit(1);
		} else {
			//If is not a HTML file
			if (!/\w*.html$/.test(pathname)) {
				console.log(clc.redBright("\nError!!!\n"));
				console.error(clc.whiteBright("Please select a html file."));
				process.exit(1);
			} else {
				const data = readFileAsString(pathname);

				//Remove external files routes
				this._file = data
					.replace(/#(js|css) .*(\n|\r\n|\r)/g, "")
					.split(/<script.*>/g)
					.map((e, i) => i > 0 ? e.replace(/(\n|\r|\r\n)*(.*(\n|\r|\r\n)*)*<\/script>/, "") : e)
					.join("");

				this._getFileData(data, "js"); //Get Js Route and Data
				this._getFileData(data, "css"); //Get Css Route and Data
				this._getScriptTags(data);
				this._getStyleTags(data);
			}
		}
	}
	/**
	 * Get Script Tags
	 * 
	 * Find the script tags and set the content as Component Data
	 * 
	 * @param {String} html 
	 */
	_getScriptTags(html) {
		html.split(/<script.*>/g).forEach((e, i) => {
			if (i > 0)
				this._js.push(e.replace(/<\/script>/g, ""));
		});
	}
	/**
	 * Get Style Tags
	 * 
	 * Find the style tags and set the content as Component Styles
	 * 
	 * @param {String} html 
	 */
	_getStyleTags(html) {
		html.split(/<style.*>/g).forEach((e, i) => {
			if (i > 0)
				this._css.push(e.replace(/<\/style>/, ""));
		});
	}
	/**
	 * Get File Data
	 * 
	 * Get Data from JS or Css, Get routes from the HTML String and get the content
	 * 
	 * @param {String} htmlString 
	 * @param {String} type
	 */
	_getFileData(htmlString, type) {
		if (type === "css" || type === "js") {
			const reg = new RegExp(`#${type} .*`, "g"); //RegExp to get paths
			var path;
			if (reg.test(htmlString))
				path = htmlString.match(reg).map(e => {
					return e.replace(`#${type} `, "");
				});

			if (path !== undefined)
				path.forEach(e => {
					const data = readFileAsString(join(__dirname, "..", "..", e));
					type === "css" ? this._css.push(data) : this._js.push(data); //Set Data                    
				});
		} else
			throw new Error(`Invalid Type ${type}`);
	}
}
module.exports = TranslatorFileFunctions;
