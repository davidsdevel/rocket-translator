let htmlTextArea = document.getElementById("text-html");
var htmlCodeMirror = CodeMirror.fromTextArea(htmlTextArea,{
	value: htmlTextArea.value,
	lineNumbers:true,
   	matchBrackets: true,
   	htmlMode:true,
   	mode:"text/xml",
   	theme:"darcula"
})
htmlCodeMirror.setValue("<!--Start Coding Here-->");

let jsTextArea = document.getElementById("text-js");
var jsCodeMirror = CodeMirror.fromTextArea(jsTextArea,{
	value: jsTextArea.value,
	lineNumbers:true,
   	mode:"text/css",
   	theme:"darcula"
})
jsCodeMirror.setValue("//Start Coding here");
