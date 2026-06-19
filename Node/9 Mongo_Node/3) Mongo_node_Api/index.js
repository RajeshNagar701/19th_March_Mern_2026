
const dbConnect=require('./MongoConn'); /// import connection 
const express=require('express');
const app=express();

app.use(express.json());  

// get all data  http://localhost:5000/getdata
app.get('/getdata', async (req, resp) => {
    let conn = await dbConnect();
    data = await conn.find({}).toArray();
    resp.send(data);
	console.log(data);
});

//http://localhost:5000/getsingle

// get single or particular column data 
app.get('/getsingle1', async (req, resp) => {
    let conn = await dbConnect();
    data = await conn.find({id:1}).toArray();
    resp.send(data);
});

//http://localhost:5000/getsingle2?name=raj nagar
// get single or particular column data
app.get('/getsingle2', async (req, resp) => {
    let conn = await dbConnect();
	console.log(req.query); // { name: 'raj nagar' }	
    data = await conn.find(req.query).toArray();
    resp.send(data);
});

app.get('/getsingle3', async (req, resp) => {
    let conn = await dbConnect();
    data = await conn.find(req.body).toArray(); // body json data
	console.log(req.body);
    resp.send(data);
});


//=========================================================================





app.listen(5000);
