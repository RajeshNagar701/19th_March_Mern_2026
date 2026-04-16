/*
this my custome own /local module

Node.js Local Module
Local modules are modules created locally in your Node.js application. 
These modules include different functionalities of your application in 
separate files and folders. You can also package it and distribute it via NPM, 
so that Node.js community can use it. For example, if you need to connect to 
MongoDB and fetch data then you can create a module for it, which can be reused in 
your application.


Massage.js :=> 
module.exports = 'Hello world';


App.js :=>
var msg = require('./Messages.js'); 
console.log(msg);

==============================================================
Export Object

data.js
module.exports = { firstName: 'James', lastName: 'Bond' }

App.js
var person = require('./data.js'); 
console.log(person.firstName + ' ' + person.lastName);

=================================================================

Export Function

Log.js:=>
module.exports = function (msg) { 
console.log(msg); 
};

App.js:=>
var msg = require('./Log.js'); 
msg('Hello World');

==================================================================



app.js

module.exports={
    x:10,
    y:20,
    z:function(){
        return 10;
    }
}


Index.js

const app=require('./app');
console.log(app);
console.log(app.x);
console.log(app.z());


*/


// function module

var todayDate=()=>{
	
	var today = new Date();
	var date = (today.getDate())+'-'+ (today.getMonth()+1) +'-'+(today.getFullYear());
	return date;
}
// local module export
module.exports = todayDate ;
