
/*
SQL : WE USE xampp => mySql
    
Download xampp & install : https://www.apachefriends.org/download.html

x -cross platform
a -apatch serve
m -mysql
p -php
p -perl 
------------------------------
search : xampp-control => start apache & mysql

google : localhost/phpmyadmin 

create : database & table 
-------------------------------------------
npm i mysql express
 
*/
// Mysql Connectivity
const mysql = require("mysql");  // npm i mysql
const conn= mysql.createConnection({
    host:'localhost',  // hostname
    user:'root',       // user default root
    password:"",       // pass : null
    database:"12th_may"  // db_name
});
conn.connect((err)=>{
    if(err)
    {console.warn("error in connection")}
});

module.exports =conn;




/*

//Creating a Database
con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
	console.log("Database created");
  });
*/
  
/*
//Creating a Database

var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
	console.log("Table created");
  });

*/


/*
//Insert Into Table

var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
	console.log("1 record inserted");
  });

*/

/*
//Selecting From a Table

con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
	console.log(result);
  });

*/

/*
//Select With a Filter
 con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
    if (err) throw err;
	console.log(result);
  });
*/

/*
//Sort the Result
 con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
    if (err) throw err;
	console.log(result);
  });
*/
/*
//Delete Record
 var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
  con.query(sql, function (err, result) {
    if (err) throw err;
	console.log("Number of records deleted: " + result.affectedRows);
  });
*/

/*
//Delete a Table
var sql = "DROP TABLE customers";
  con.query(sql, function (err, result) {
    if (err) throw err;
	console.log("Table deleted");
  });
*/

/*
//Update Table Data

var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  con.query(sql, function (err, result) {
    if (err) throw err;
	console.log(result.affectedRows + " record(s) updated");
  });
*/





