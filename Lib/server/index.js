import express from "express";
import bodyParser from "body-parser";
import {join} from "path";
import {exec} from "child_process";
import {write, remove} from "../file-utils/ServerFileFunctions";
import {VueCompiler, ReactCompiler} from "../core";

const server = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const publicFolder = join(__dirname, "public");

server
	.get("/", (req, res) => {
		res.setHeader("Content-Type", "text/html");
		res.sendFile(join(publicFolder, "index.html"));
	})
	.get("*.js", ({url}, res) => {
		res.setHeader("Content-Type", "text/javascript");
		res.sendFile(join(publicFolder, url));
	})
	.get("*.css", ({url}, res) => {
		res.setHeader("Content-Type", "text/css");
		res.sendFile(join(publicFolder, url));
	})
	.post("/translator", urlencodedParser, ({body}, res) => {
		let {
			html,
			js,
			css,
			name:filename,
			type
		} = body; //Component Data

		if (type === "React") {

			let dir = {
				folder:filename,
				files:{}
			};
			dir.files[`${filename}.css`] = css;
			dir.files[`${filename}.jx`] = ReactCompiler(filename, html, css, js); 
			// To download File
			write(dir);
			res.download(`./tmp/${filename}.jsx`, err => {
				if(err) throw new Error(err);
				remove(filename);
			});
		} else if (type === "Vue") {

			let dir = {
				folder:filename,
				files:{}
			};
			dir.files[`${filename}.css`] = css;
			dir.files[`${filename}.vue`] = VueCompiler(filename, html, css, js); 
			// To download File
			write(dir);
			res.download(`./tmp/${filename}.vue`, err => {
				if(err) throw new Error(err);
				remove(filename);
			});
		} else {
			res.setHeader("Content-Type", "text/plain; charset=utf-8");
			res.send();

			// To download File
			/*write(filename+".vue", VueCompiler(filename, html, css, js));
			res.download(`./tmp/${filename}.vue`,err=>{
				remove(filename+".vue");
			});*/
		}
	});

const startServer = port => {
	port = port || 8080;
	server.listen(port, () => {
		console.log(`Listen on http://localhost:${port}`);
		exec(`start http://localhost:${port}`);
	});
};

export {
	startServer
};
