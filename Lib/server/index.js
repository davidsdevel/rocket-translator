const express = require("express"),
	  server = express(),
	  bodyParser = require("body-parser"),
	  urlencodedParser = bodyParser.urlencoded({ extended: false }),
	  {join} = require("path"),
	  {exec} = require("child_process"),
	  {write, remove} = require("../file-utils").ServerFileFunctions,
	  {VueCompiler, ReactCompiler} = require("../core"),
	
	  public = join(__dirname, "public");
	  
server
	.get("/", (req, res)=>{
		res.setHeader("Content-Type", "text/html");
		res.sendFile(join(public, "index.html"));
	})
	.get("*.js", ({url}, res)=>{
		res.setHeader("Content-Type","text/javascript");
		res.sendFile(join(public, url));
	})
	.get("*.css", ({url}, res)=>{
		res.setHeader("Content-Type","text/css");
		res.sendFile(join(public, url));
	})
	.post("/translator", urlencodedParser, ({body},res)=>{
		let html = body.html; //HTML Data
		let js = body.js; //JS Data
		let css = body.css; //Css Data
		let filename = body.name; //Filename
		if (body.type === "React") {

			let dir = {
				folder:filename,
				files:{}
			}
			dir.files[filename+".css"] = css;
			dir.files[filename+".js"] = ReactCompiler(filename, html, css, js); 
			// To download File
			write(dir);
			res.download(`./tmp/${filename}.js`,(err)=>{
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
	})

exports.startServer = port => {
	port = port || 8080;
	server.listen(port, ()=>{
		console.log(`Listen on http://localhost:${port}`);
		exec(`start http://localhost:${port}`);
	});
}
