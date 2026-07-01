
/*

Node.js Mongoose is a MongoDB object modeling tool designed to work 
in an asynchronous environment.

Provide model & schema 

Schema: field control in mongoose 

With the help of Mongoose, we can model our data.
For example, consider that we are operating a store. Store has items. 
Each item could have properties : name, id, price, discount price, etc. 
With Mongoose we can model our items and do insertions or reads from 
the MongoDB Collection in terms of model objects, not bothering about 
the details of an object. Mongoose provides abstraction at Model level.

Exa : Note : ( if we have table & 3 columns then we add only 3 columns 
but sometimes by mistake we add extra columns like 4 or 5 columns 
& not proper data type in table by api then problem occurs. 
So for solution Mongoose prevent & provide model & schema for 
perfect column with perfect data type so provide validation)
we shall learn about the Mongoose package, how to install it, 
and different operations that are available with MongoDB.

// install
$ npm install mongoose express

// import
var mongoose = require('mongoose');


*/

// connectivity

var mongoose = require('mongoose'); // import mongoose module
mongoose.connect('mongodb://localhost:27017/14th_feb'); // conect mongodb

/*
create schema for Datatype of schema

String
Number
Date
Buffer
Boolean
Mixed
Union
ObjectId
Array
Decimal128
Map
Schema
UUID
BigInt
Double
Int32
*/

// validation schema
var post_schema=mongoose.Schema({	
	userId:{
		type: String,
		required: true},
	id:{
		type: Number,
		unique: true,
		required: true},
	title:{
		type: String,
		required: true},
	mobile:{ 
		type: String,
		required: [true, "Mobile number is required"],
		match: [/^[0-9]{10}$/, "Enter valid 10 digit mobile number"]},
	dob:{ 
		type: Date,default: Date.now
		}
});

// create model & apply schema on model
var emp_model = mongoose.model('post', post_schema);



/*
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
  },
  age: {
    type: Number,
    min: 18,
    max: 120
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'moderator'],
    default: 'user'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  tags: [String], // Array of strings
  address: addressSchema, // Embedded subdocument
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true
  }
}, {
  timestamps: true // Automatically creates 'createdAt' and 'updatedAt' fields
});

// 3. Create and export the Model
const User = mongoose.model('User', userSchema);
module.exports = User;


*/