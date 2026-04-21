
/*

The process.argv in node is used to access and interact with the command-line arguments. 
It is an array that contains the command line arguments and helps user to 
interact node app using CLI.
This property returns an array containing the arguments passed to the process 
when run in the command line.
process.argv[0]: is the process execution path   node
process.argv[1]: is the path for the js file.    myfile.txt 
process.argv[2] and more: other items in the array are the additional arguments passed by the user.

*/
// Importing the process module
const process = require('process');  
console.log(process.argv);
/*
Run :node app.js abc xyz
ans : all argument  
*/
console.log(process.argv[2]);
/*
Run :node app.js abc xyz
ans : abc 
*/