
var express=require('express');

var app=express();

app.get('/',(req,res)=>{
	res.send('<h1>Hello word</h1>');  // direct content
	//resp.sendFile(`${publicpath}/index.html`);  // send file
})


// Get parameter by Routing => pass value by ? =>  req.query
//http://localhost:3000/argument?name=rajesh

app.get('/argument',(req,res)=>{
	console.log('Data sent by Browser', req.query) // get object
	res.send(`<h1>Hello argument : ${req.query.name}</h1>`);  // gen obj propert value
})

// => pass value by /:id =>  req.params
app.get('/passid/:id',(req,res)=>{
	console.log('Data sent by Browser', req.params) // get id object
	res.send(`<h1>Hello argument : ${req.params.id}</h1>`);
})

app.listen(3000);
