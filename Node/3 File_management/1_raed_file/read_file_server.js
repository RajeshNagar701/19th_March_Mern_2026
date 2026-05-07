
/*
Read HTML file on Server
Create a Node.js file that reads the HTML file, and return the content:


*/


var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {
	
	fs.readFile('TextFile.txt',function(err,data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write("<h1>" + data +"</h1>");
		return res.end();
	})
}).listen(8080);	


