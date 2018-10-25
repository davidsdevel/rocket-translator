const {existsSync, appendFileSync, mkdirSync, readFileSync} = require("fs");
const { join } = require("path");

class TranslatorFileFunctions {
    contructor(){
        this._file = undefined;
        this._entry = undefined;
        this._out = undefined;
        this._js = undefined;
    }
    setParams(fileName, output){
        this._entry = fileName;
        this._out = output;
        this._findFile(fileName);
    }
    getFile(){
        return this._file;
    }
    getJs(){
        if (this._js !== undefined){
            return this._js;
        } else {
            return ""
        }
    }
    writeFile({content, type, name}){
        if(!existsSync(this._out)){
            mkdirSync(this._out);
        }
        let mime;
        switch (type) {
            case "vue":
                mime = "vue";
                break;
            case "react":
                mime = "jsx";
                break;
            default:
                break;
        }
        //appendFileSync(join(this._out, `${name}.${mime}`), content);
        console.log(content);
    }
    _findFile(entry){
        if (!existsSync(entry)) {
            console.error("File does not exist.");
            process.exit(1);

        } else {
            if (!entry.match(/\w*.html$/)){
                console.error("Please select a html file.");
                process.exit(1);
                
            } else {
                let fileBuffer = readFileSync(entry);
                let data = Buffer.from(fileBuffer).toString();
                this._file = data.replace(/#js .*(\n|\r)/g, "").replace(/#css .*(\n|\r)/g, "");
                this._getJS(data);
                this._getCSS(data);
            }
        }
    }
    _getJS(html){
        let path = null;
        if (html.match(/#js .*/g)) {
            path = html.match(/#js .*/g).map(e=>{
                return e.replace("#js ", "");
            });
        }
        if (path !== null) {
            let buff = readFileSync(join(__dirname, path[0]));
            this._js = Buffer.from(buff).toString();
        }
    }
    _getCSS(html){
        let path = null;
        if (html.match(/#css .*/g)) {
            path = html.match(/#css .*/g).map(e=>{
                return e.replace("#css ", "");
            });
        }
        if (path !== null) {
            let buff = readFileSync(join(__dirname, path[0]));
            this._js = Buffer.from(buff).toString();
        }
    }
}
module.exports = TranslatorFileFunctions;