/*

Own Modules or Local Modules

 Local modules are modules created locally in your Node.js application.
 These modules include different functionalities of your application in separate 
 files and folders. 
 You can also package it and distribute it via NPM, 
 so that Node.js communitycan use it.
 
 We need module.exports to define what couldbe access from other file

*/

// import

var date=require('./todayDate.js');

console.log(date());


 
