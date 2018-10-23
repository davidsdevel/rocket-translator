//Server

const express = require("express"),
	  server = express(),

	  bodyParser = require("body-parser"),
	  urlencodedParser = bodyParser.urlencoded({ extended: false }),
	  
	  {join} = require("path"),

	  {write, remove} = require("./utils").fileFunctions,
	  {VueCompiler, ReactCompiler} = require("./Lib"),
	  public = join(__dirname, "public");
	  
server
	.get("/", (req, res)=>{
		res.setHeader("Content-Type", "text/html");
		res.sendFile(join(public, "index.html"));
	})
	.get("*.js", ({url}, res)=>{
		res.setHeader("Content-Type","text/javascript")
		res.sendFile(join(public, url));
	})
	.get("*.css", ({url}, res)=>{
		res.setHeader("Content-Type","text/css");
		res.sendFile(join(public, url));
	})
	.post("/translator", urlencodedParser, ({body},res)=>{
		let html = body.html;
		let js = body.js;
		let css = body.css;
		let filename = body.name
		if (body.type === "React") {
			res.setHeader("Content-Type", "text/javascript; charset=utf-8")
			res.send(ReactCompiler(filename, html, css, js))
			/*write(filename+".js", reactCompiler(html, css))
			res.download(`./tmp/${filename}.js`,(err)=>{
				remove(filename+".js")
			})*/
		} else {
			res.setHeader("Content-Type", "text/plain; charset=utf-8")			
			res.send(VueCompiler(filename, html, css, js))
			/*write(filename+".vue", vueCompiler(html, css))
			res.download(`./tmp/${filename}.vue`,err=>{
				remove(filename+".vue")
			})*/
		}
	})

exports.startServer = port => {
	port = port || 8080;
	server.listen(port, console.log(`Listen on http://localhost:${port}`))
}