const fs = require('fs');

//path Module
const path = require('path');  // folder module
const dirpath=path.join(__dirname,'public/demo')

//create file in crud folder


var students=[
	{
	id:1,
	filename:"monil.txt",
	name:"Monil",
	email:"monil@gmail.com",
	age:30
	},
	{
	id:2,
	filename:"raj.txt",
	name:"raj",
	email:"raj@gmail.com",
	age:30
	},
	{
	id:3,
	filename:"akash.txt",
	name:"akash",
	email:"akash@gmail.com",
	age:30
	}
];

for(i=0;i<students.length;i++)
{
	fs.writeFileSync(`${dirpath}/${students[i].filename}`,`My name is ${students[i].name} , My email id is : ${students[i].email} , My age is : ${students[i].age}`);
}

