
/*

Node.js File System / Crud in dir
The Path module is a built-in Node.js module that provides tools 
for handling and transforming file paths across different operating systems.

core module : path


const path = require('path');

const notes = '/users/joe/notes.txt';

path.dirname(notes); // /users/joe
path.basename(notes); // notes.txt
path.extname(notes); // .txt

*/

const fs = require('fs');


//path Core Module 
const path = require('path');  // folder module
const dirPath= path.join(__dirname,'myDir/fruit');  // current crud folder path 


//create file &Write data in myDir folder



fs.writeFileSync(`${dirPath}/apple.txt`,'this is a simple file with dir path',(err)=>{
if(!err) { console.log("file is created"); }
})




// read
/*
 
 fs.readFile(`${dirPath}/apple.txt`,'utf8',(err,data)=>{
 console.log(data);
})

*/

// update

/*
fs.appendFile(`${dirPath}/apple.txt`,'for fruits',(err)=>{
if(!err) {
	console.log("file is updated");
	}
})

*/


// rename

/*

fs.rename(`${dirPath}/apple.txt`, `${dirPath}/fruit.txt`,(err)=>{
if(!err) console.log("file name is updated")
})

*/  

// Delete 	

/*
fs.unlinkSync(`${dirPath}/fruit.txt`,(err)=>{
if(!err) console.log("file is deleted")
});
*/
