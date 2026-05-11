
//Application-level middleware   // work on all routes 

var express=require('express');
var app=express();

// set middleware on all routes
const middleware =(req,resp,next)=>
{
	if (!req.query.age) {
        resp.send("Please provide your age")
    }
    else if (req.query.age<18) {
        resp.send("You are under aged")
    }
    else {
        next();
    }
}

// all routes must first filter that conditions
app.use(middleware);  //  Not work any routes if condition not true 


// 


app.get('/',(_,resp)=>{
	 resp.send("You are eligible for website Home page")
})
app.get('/about',(_,resp)=>{
	 resp.send("You are eligible for website About page")
})
app.get('/contact',(_,resp)=>{
	 resp.send("You are eligible for website contact page")
})


app.listen(3000);
