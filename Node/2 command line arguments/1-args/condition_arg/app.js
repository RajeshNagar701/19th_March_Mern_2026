
/*
 Core Module (process)
 
 process.argv

We can take input from user using command line arguments (process.argv)

node app.js add 

- process.argv is Global object like console 

console.log(process.argv) 

- so we can pass value from command line like what operation we want to perform 
node app.js add

           0    1     2    3       4     5
cmd go : node app.js raj mahesh nikita nipun  // argument start with 0 index

*/
// Importing the process module
//const process = require('process');  

// Printing process.argv property value
//console.log(process.argv);

const process = require('process');  
//console.log(process.argv[2]);

if(process.argv[2]=="Nagar")
{
	console.log("Nagar project is Running");
}
else if(process.argv[2]=="Nirav")
{
	console.log("Nirav project is Running");
}
else if(process.argv[2]=="Nayan")
{
	console.log("Nayan project is Running");
}
else
{
	console.log("Wrong Command");
}	