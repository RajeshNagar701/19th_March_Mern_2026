
//step 1 npm i ejs


const express = require('express');
const app = express();

const path = require('path');
var publicpath=path.join(__dirname,'public') // public sudhi no path

app.set('view engine','ejs') // step 2 load ejs on app

app.get('/',(_,resp)=>{
   resp.render(`${publicpath}/index`);
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