
/*
What is Callback?

A Callback in Node.js is an asynchronous equivalent for a function. 
It is a special type of function 
passed as an argument to another function. Node.js makes heavy use of callbacks.
 
Callbacks help us make asynchronous calls. All the APIs of Node are written in such a 
way that they support callbacks.

function function_name(argument, function (callback_argument){
   // callback body 
})

*/
	
	

/*
// callback 
setTimeout(function () { 
   console.log('This prints after 5000 ms'); 
}, 5000);
console.log("Hello World");
*/



// callback by arrow function


/*

setTimeout(()=>{ 
   console.log('This prints after 1000 ms'); 
}, 5000);

console.log("Hello World");

*/




/*

Blocking Code Example
The following code reads the file synchronously with the help of readFileSync()1 
function in fs module. 

*/

/*
var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("Program Ended");
*/


/*
Non-Blocking Code Example
The ReadFile() function in fs module is provided a callback function. 
The two arguments passed to the callback are error and the return value 
of ReadFile() function itself. 
*/



var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});
console.log("Program Ended");
