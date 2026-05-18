/*

Express.js view engine for handlebars.js

$ npm install hbs


Using hbs as the default view engine requires just one line of code in your app setup. This will render .hbs files when res.render is called

app.set('view engine', 'hbs');


=============================
Folder stucture => views => all view page  => partials => all header footer page


var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


// page includes

template.html      -> {{> template}}
template 2.html    -> {{> template_2}}
login view.hbs     -> {{> login_view}}
template-file.html -> {{> template_file}}

*/





const express=require('express');

const app=express();
const hbs = require('hbs');



app.set('view engine', 'hbs');  // app.set('view engine','ejs')



// 1 static code 
/*
app.get('/send',(_,resp)=>{
    resp.send(`<h1>Hello i am static code </h1>`)
});
*/

// 2  static page call & want path stattic page
/*
const path = require('path');
const publicPath=path.join(__dirname,'public'); 

app.get('/sendFile',(_,resp)=>{
    resp.sendFile(`${publicPath}/demo.html`);
});
*/



// 3 get hbs template page from views  
app.use(express.static('public')); // global set kar diya
hbs.registerPartials(__dirname + '/views/layout');

app.get('/',(_,resp)=>{
    resp.render('index');
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
    resp.render('about',{data});
});

app.get('/service',(_,resp)=>{
    resp.render('service');
});

app.get('/contact',(_,resp)=>{
    resp.render('contact');
});

app.get('*',(_,resp)=>{
	
    resp.render('pnf');
});

app.listen(3000);
