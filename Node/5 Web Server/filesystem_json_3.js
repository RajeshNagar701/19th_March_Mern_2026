

const fs = require("fs"); 

/*
// read data from json file 
fs.readFile("myjson.json", function(err, data){
	console.log(JSON.parse(data));
})
*/


const data=[
	{name:'Raj', email:'raj@gmail.com'},
	{name:'nagar', email:'nagar@gmail.com'},
	{name:'nirav', email:'nirav@gmail.com'},
	{name:'mahesh', email:'mahesh@gmail.com'},
	{name:'pavan', pavan:'nirav@gmail.com'}
];

fs.writeFile("myjson.json",JSON.stringify(data),()=> { console.log('Data added success') }); 
			