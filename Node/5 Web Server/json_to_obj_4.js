
// conver json data to object
const fs = require("fs");
var http = require('http');

http.createServer(function (req, res) {
 
  fs.readFile("myjson.json", function(err, jsondata){
	  
	res.writeHead(200, {'Content-Type': 'application/json'});  
	res.write(jsondata)
	res.end();
	
  });
  
}).listen(8080);

