
var express=require('express');

var app=express();

app.get("/", (req, resp) => {
	
resp.send("<h1>Hi i am index</h1>");})

app.get("/api", (req, resp) => {

	resp.send([{
					name:'Peter',
					email:'peter@test.com'
				},
				{
					name:'Bruce',
					email:'bruce@test.com'
				}
			]);
});
//============================================

// send obj to json data // 
var obj=[
			{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"},
			{firstName:"John1", lastName:"Doe1", age:50, eyeColor:"blue1"},
			{firstName:"John2", lastName:"Doe2", age:50, eyeColor:"blue2"}
		];
app.get("/api1", (req, resp) => {
	resp.send(obj); 
});

app.listen(3000);
