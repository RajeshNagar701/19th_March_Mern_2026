/*
Middleware

Middleware in Express.js is a function that executes during the request-response cycle. 
It acts as a bridge between the incoming request from a client and the final route handler,
allowing you to run code, modify request and response objects, and control 
whether the cycle continues

Core ConceptEvery Express application is essentially a series of middleware function calls. 
A middleware function typically receives three arguments:


req: The request object.
res: The response object.
next: A function that, when called, passes control to the next ()

const middleware=(req,resp,next)=>{
	
}

app.use(middleware)


*/


//Application-level middleware   // work on all routes 

var express=require('express');
var app=express();


const middleware=(req,resp,next)=>{
	
	if(!req.query.age)
	{
		resp.send("<h1>Not Eligible => add age first<h1>");
	}
	else if(req.query.age<18)
	{
		resp.send("<h1>Not Eligible => add age greater then 18 <h1>");
	}
	else
	{
		next()
	}	
}

app.use(middleware); // middleware apply on app


app.get('/',(_,resp)=>{
	 resp.send("<h1>You are eligible for website Home page <h1>")
})
app.get('/about',(_,resp)=>{
	 resp.send("<h1> You are eligible for website About page <h1>")
})
app.get('/contact',(_,resp)=>{
	 resp.send("<h1> You are eligible for website contact page <h1>")
})


app.listen(3000);
