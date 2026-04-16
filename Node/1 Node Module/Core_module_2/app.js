
var http = require('http');

http.createServer((req,resp)=>{
		
	resp.writeHead(200, { 'Content-Type': 'text/html' });
	//resp.write('<h1>Hi i am http module sserver </h1>')	
	resp.write(JSON.stringify({name:"raj",age:31,mobile:"1234567891"}));
	resp.end();
	
}).listen(5000);
