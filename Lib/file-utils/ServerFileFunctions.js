const {createWriteStream,
	existsSync,
	writeFileSync,
	mkdirSync,
	unlinkSync,
	rmdirSync,
	readdirSync,
	lstatSync} = require("fs"),
	{join} = require("path"),
	tmpPath = join(__dirname,"../server", "tmp"),
	archiver = require('archiver'); 


exports.write = (filename, content) =>{
	if (!existsSync(tmpPath)) {
		mkdirSync(tmpPath);
	}
	if (typeof filename === "object") {
		let {folder, files} = filename;

		let filenames = Object.keys(files);

		if (!existsSync(join(tmpPath, folder))) {
			mkdirSync(join(tmpPath, folder));
		}

		filenames.forEach(e=>{
			writeFileSync(join(tmpPath, folder, e), files[e]);
		})
		compress(join(tmpPath, folder))
	} else {
		writeFileSync(join(tmpPath, filename), content);
		compress(join(tmpPath, filename));
	}
}

exports.remove = filename =>{
	try{
		unlinkSync(join(__dirname,"../server", "tmp", filename));
	} catch (err) {
		let folder = join(__dirname,"../server", "tmp", filename);
		let files = readdirSync(folder);
		files.forEach(e=>{
			unlinkSync(join(folder, e));
		})
		rmdirSync(folder);
	}

}

function compress(filename) {
	let output;
	let name = filename.split(/\/|\\/g)
	fileName = name[name.length-1];
	let path = name;
	path.pop();

	if (lstatSync(filename).isDirectory()) {
		output = createWriteStream(join(path.join("/"), fileName+".zip"));
	} else {
		fileName = name.split(".")[0];
		output = createWriteStream(join(path.join("/"), fileName+".zip"));		
	}
	let archive = archiver('zip', {
		zlib:{
			level:9
		}
	})
	archive.pipe(output);
	archive.directory(join(tmpPath, fileName), "src");
	archive.finalize();
}
