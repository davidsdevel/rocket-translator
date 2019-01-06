const {
	existsSync,
	mkdirSync,
	readFileSync,
	writeFileSync
} = require("fs");
const{ join } = require("path");
const {VueCompiler, ReactCompiler} = require("../core");
const clc = require("cli-color");

/**
  * File Functions to CLI
  * 
  * @class
  */
class TranslatorFileFunctions {
	contructor(){
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
	setParams(fileName, output){
		this._entry = fileName;
		this._out = output;
		this._js = [];
		this._css = [];
		this._findFile(fileName); //Find all files
	}
	/**
	 * Get File
	 * 
	 * Return the HTML file
	 * 
	 * @public
	 * @return {String}
	 */
	getFile(){
		return this._file;
	}
	/**
	 * Get Js
	 * 
	 * Return the Javascript file
	 * 
	 * @public
	 * @return {String}
	 */
	getJs(){
		if (this._js !== undefined){
			return this._js.join("\r\n").split(/\n|\r|\r\n/g).map(e => {
				if (e) return e.replace(/\t|\s\s\s\s|\s\s/, "");
			})
				.filter(e => {
					return e;
				})
				.join("\r\n");
		} else {
			return "";
		}
	}
	/**
	 * Get CSS
	 * 
	 * Return the Css file
	 * 
	 * @public
	 * @return {String}
	 */
	getCSS(){
		if (this._css !== undefined){
			return this._css.join("\r\n").replace(/^(\n|\r|\r\n)\t*/g, "");
		} else {
			return "";
		}
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
			let componentsFolder = join(this._out, MainComponentName, "components");
			if(!existsSync(componentsFolder)){
				mkdirSync(componentsFolder);
			}
			for (let i = 0; i <= ComponentsArray.length - 1; i++) {
				let {name} = ComponentsArray[i];
				let {content} = ComponentsArray[i];
				let mime;
				
				if (type === "vue") {
					content = VueCompiler(name, content.split(/\n/).map(e => e.replace(/\t\t/, "")).join("\n"), "", this.getJs());
					mime = "vue";
				} else if (type === "react") {
					content = ReactCompiler(name, content.split(/\n/).map(e => e.replace(/\t\t/, "")).join("\n"), "", this.getJs());
					mime = "jsx";
				}
				else console.error(`Type must be '${clc.whiteBright("react")}' or '${clc.whiteBright("vue")}'"`);

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
	writeFile({content, type, name}){
		if(!existsSync(this._out)){
			mkdirSync(this._out);
		}
		let mime;
		switch (type) {
		case "vue":
			mime = "vue"; //Set "vue" extension
			break;
		case "react":
			mime = "jsx"; //Set "jsx" extension
			break;
		default:
			throw new Error(`Invalid Type ${type}`);
		}

		//Component Folder Name
		let folderPath = join(this._out, name);

		if(!existsSync(folderPath)){
			mkdirSync(folderPath);
		}

		//Component Path
		let filePath = join(this._out, name, `index.${mime}`);
		writeFileSync(filePath, content);

		//console.log(content); //Console Log to debug
	}
	/**
	 * Find File
	 * 
	 * Get the path and find if the file exist
	 * 
	 * @param {String} pathname
	 */
	_findFile(pathname){
		if (!existsSync(pathname)) {
			console.log(clc.redBright("\nError!!!\n"));
			console.error(clc.whiteBright("File does not exist."));
			process.exit(1);
		} else {
			//If is not a HTML file
			if (!pathname.match(/\w*.html$/)){
				console.log(clc.redBright("\nError!!!\n"));
				console.error(clc.whiteBright("Please select a html file."));
				process.exit(1);
			} else {
				let fileBuffer = readFileSync(pathname); //Read file
				let data = Buffer.from(fileBuffer).toString(); //Decode Buffer

				//Remove external files routes
				this._file = data
					.replace(/#js .*(\n|\r)/g, "")
					.replace(/#css .*(\n|\r|\r\n)/g, "")
					.split(/<script.*>/g)
					.map((e, i) => {
						if (i > 0) return e.replace(/(\n|\r|\r\n)*(.*(\n|\r|\r\n)*)*<\/script>/, "");
						else return e;
					})
					.join("");
				this._getFileData(data, "js"); //Get Js Route and Data
				this._getFileData(data, "css"); //Get Css Route and Data
				this._getScriptTags(data);
				this._getStyleTags(data);
			}
		}
	}
	_getScriptTags(html) {
		html.split(/<script.*>/g).forEach((e, i) => {
			if (i > 0) {
				this._js.push(e.replace(/<\/script>/g, ""));
			}
		});
	}
	_getStyleTags(html){
		html.split(/<style.*>/g).forEach((e, i) => {
			if (i > 0) {
				this._css.push(e.replace(/<\/style>/, ""));
			}
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
	_getFileData(htmlString, type){
		if (type === "css" || type === "js") {
			let reg = new RegExp(`#${type} .*`, "g"); //RegExp to get paths
			let path = null;
			if (htmlString.match(reg)) {
				path = htmlString.match(reg).map(e => {
					return e.replace(`#${type} `, "");
				});
			}
			if (path !== null) {
				path.forEach(e => {
					let buff = readFileSync(join(__dirname, "..", "..", e)); //Read File
					let data = Buffer.from(buff).toString(); //Decode Buffer
					type === "css" ? this._css.push(data) : this._js.push(data); //Set Data                    
				});
			}
		} else {
			throw new Error(`Invalid Type ${type}`);
		}
	}
}
module.exports = TranslatorFileFunctions;
