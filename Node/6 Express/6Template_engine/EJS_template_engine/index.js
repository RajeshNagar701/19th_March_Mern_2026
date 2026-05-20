
//step 1 npm i ejs
//Step 2 app.set('view engine','ejs')

//Step 3 create public folder in root
//Step 4 store all html view page with .ejs ext
	// => header & footer page & include in all pages 
	// <%- include('common/header'); %>

const express = require('express');
const app = express();

const path = require('path');
var publicpath=path.join(__dirname,'public') // public sudhi no path

app.set('view engine','ejs') // step 2 load ejs on app

app.get('/',(_,resp)=>{
   resp.render(`${publicpath}/index`);  // index.ejs no need direct use index
});

app.get('/about',(_,resp)=>{
	
  var data=[
		{
			name:'Nirav',
			email:'Nirav@test.com',
			country:'USA',
		    Skills:['php','java','python	']
		},
		{
			
			name:'rajesh',
			email:'rajesh@test.com',
			country:'USA',
		    Skills:['php','java','python	']
		}
   ];
   resp.render(`${publicpath}/about`,{data});
});

app.get('/blog',(_,resp)=>{
   resp.render(`${publicpath}/blog`);
});

app.get('/*',(_,resp)=>{	
   resp.render(`${publicpath}/pnf`);
});


app.listen(3000);