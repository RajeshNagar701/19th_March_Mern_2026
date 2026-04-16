
/*
Core module

 Core Modules
Node.js Core / Builtin  Modules
Node.js is a light weight framework. 
The core modules include bare minimum functionalities of Node.js. 
These core modules are compiled into its binary distribution and load automatically 
when Node.js process starts. 

However, you need to import the core module first in order to use it in your application.

http
fs
path

const fs=require('fs');


Node.js as a File Server
The Node.js file system module allows you to work with the file system on your computer.

To include the File System module, use the require() method:


Common use for the File System module:

Read files 	 The fs.readFile() method is used to read files on your computer.
Create files
Update files
Delete files
Rename files

*/

var fs=require('fs');
//fs.writeFileSync('myapp.txt', 'My name is Andrew.') // It creates a new file if the specified file does not exist. 
fs.appendFileSync('demo.txt',' My name is Raj nagar');//synchronously append the given data to a file. A new file is created if it does not exist.
