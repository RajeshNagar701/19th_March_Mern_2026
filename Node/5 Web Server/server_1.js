/*

Create Node.js Web Server
Node.js makes it easy to create a simple web server that processes 
incoming requests asynchronously.

*/


	var http = require('http'); // 1 - Import Node.js core module

	var server = http.createServer(function (req, res) {   // 2 - creating server

		//handle incomming requests here..
		 res.writeHead(200, { 'Content-Type': 'text/html' }); 
        // set response content    
        res.write('<html><body><p>This is home Page</p></body></html>');
        res.end();
	});

	server.listen(3000); //3 - listen for any incoming requests

	