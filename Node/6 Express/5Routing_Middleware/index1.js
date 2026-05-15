
//Router-level middleware   // work on only particular routes 

var express=require('express');
var app=express();


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

//1) Method 1
// apply on particular route if true then work not for all routes

app.get('/admin',middleware,(_,resp)=>{
	 resp.send("<h1>Particular ROUTE Midleware</h1>")
})
app.get('/website',(_,resp)=>{
	 resp.send("<h1>You are eligible for website page</h1>")
})






//2) Method 2

/*
const route=express.Router();

route.use(reqFilter);
app.use('/',route);

route.get('/admin',(_,resp)=>{
	 resp.send("Particular ROUTE Midleware")
})
route.get('/dashboard',(_,resp)=>{
	 resp.send("Particular ROUTE Midleware")
})


app.get('/about',(_,resp)=>{
	 resp.send("You are eligible for website About page")
})
*/


app.listen(3000);
