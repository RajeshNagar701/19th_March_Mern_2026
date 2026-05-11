
var express=require('express');  // third party
var app=express();

const path = require('path');  // core module 
var publicpath=path.join(__dirname,'public') // public sudhi no path

// sendFile()    // send file with with our routes
app.get('/',(req,resp)=>{
	resp.sendFile(`${publicpath}/index.html`);
})

app.get('/about',(req,resp)=>{
	resp.sendFile(`${publicpath}/about.html`);
})

app.get('/blog',(req,resp)=>{
	resp.sendFile(`${publicpath}/blog.html`);
})

app.get('/*',(req,resp)=>{
	resp.sendFile(`${publicpath}/pnf.html`);
})

app.listen(3000);