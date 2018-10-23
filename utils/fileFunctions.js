const {existsSync, appendFileSync, mkdirSync, unlinkSync} = require("fs");

exports.write = (filename, content) =>{
	if (!existsSync(__dirname+"/tmp/")) {
		mkdirSync(__dirname+"/tmp");
	}
	appendFileSync(__dirname+"/tmp/"+filename, content);
}

exports.remove = filename =>{
	unlinkSync(__dirname+"/tmp/"+filename);
}