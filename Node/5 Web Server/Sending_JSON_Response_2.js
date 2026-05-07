var http = require('http'); 

var data = require('./data.js'); 


const object=[
	{name:'Raj', email:'raj@gmail.com'},
	{name:'nagar', email:'nagar@gmail.com'},
	{name:'nirav', email:'nirav@gmail.com'}
];




var server = http.createServer(function (req, res) {   
   
            res.writeHead(200, { 'Content-Type': 'application/json' });
            //res.write(JSON.stringify({name:'Raj', email:'raj@gmail.com'})); // 1 direct object
			//res.write(JSON.stringify(object)); // 2 data arr objec
			res.write(JSON.stringify(data)); // 3 data arr from custom module 
            res.end();  
});

server.listen(5000);
