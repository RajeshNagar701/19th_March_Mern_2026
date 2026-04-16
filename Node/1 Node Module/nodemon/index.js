

/*

Nodemon Package / Time Saving Module 

All time we have to run node index.js for server run if any changes any file 

Cmd : npm i nodemon -g    globally  in window
          Sudo npm i nodeon -g      in linux

Now Run : nodemon index.js   or nodemon   and save all time working	

Note : index.js auto take nodemon so not required to write

If some securities added in pc then not work globally that time  

Go : search : cmd with administrative then we can done globally 

*/
var http = require('http');

http.createServer((req,resp)=>{
		
	resp.writeHead(200, { 'Content-Type': 'text/html' });
	resp.write('<h1>Hi i am http module server !</h1>');	
	resp.end();
	
}).listen(5000);

console.log('server created !');
