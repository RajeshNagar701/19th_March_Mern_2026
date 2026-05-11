
/*
Express is a minimal and flexible Node.js web application framework that provides a 
robust set of features for web and mobile applications. 

It is an open source framework developed and maintained by the Node.js foundation.

What is Express.js?
Express provides a minimal interface to build our applications. 
It provides us the tools that are required to build our app. 
It is flexible as there are numerous modules available on npm, 
which can be directly plugged into Express.

Why Learn Express.js?

Express Framework unlike its competitors like Rails and Django, 
which have an opinionated way of building applications, 
has no "best way" to do something. It is very flexible and pluggable. 
It uses Pug, a template language for writing HTML templates.

Applications of ExpressJS
Following are the salient features of ExpressJS making it a default choice among 
web application developers.

Support RESTful APIs− REST Architecture is very powerful style to enable communication 
of front-end with backend. ExpressJS supports RESTful APIs by design.

Support for Real Time Applications− Event Driven Programming helps to create chat, 
parallel collaborative editing tools etc. ExpressJS integrates with Node and supports Event Driven Programming seemlessly.

Support for Single Page Applications(SPA)− SPA and RESTFul APIs allows Express Based application 
to update content dynamically enriching user experience.


The HTTP method is supplied in the request and specifies the operation that the client has requested. The following table lists the most used HTTP methods −

S.No.	Method & Description
1	GET

The GET method requests a representation of the specified resource. Requests using GET should only retrieve data and should have no other effect.

2	POST

The POST method requests that the server accept the data enclosed in the request as a new object/entity of the resource identified by the URI.

3	PUT

The PUT method requests that the server accept the data enclosed in the request as a modification to existing object identified by the URI. If it does not exist then the PUT method should create one.

4	DELETE

The DELETE method requests that the server delete the specified resource


===> npm install --save express

 
*/


var express=require('express');
var app=express();

app.get('/',(req,res)=>{
	res.send('<h1>Hello</h1>'); 
	// res.send({name:'Raj', email:'raj@gmail.com'}); // auto convert in json
});
app.listen(5000);


/*
var http = require('http'); 

var server = http.createServer(function (req, res) {   
   
	res.writeHead(200, { 'Content-Type': 'application/json' });
	//res.write(JSON.stringify({name:'Raj', email:'raj@gmail.com'})); // 1 direct object
	res.end();  
});

server.listen(5000);
*/