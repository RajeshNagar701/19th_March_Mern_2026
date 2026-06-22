
const dbConnect=require('./MongoConn'); /// import connection 
const express=require('express');
const app=express();

app.use(express.json());  

const { ObjectId } = require('mongodb');


// get all data  React :  http://localhost:5000/getdata
app.get('/getdata', async (req, resp) => {
    let conn = await dbConnect();
    data = await conn.find({}).toArray();
    resp.send(data);
	console.log(data);
});

/*
use in react to fetch data & loop in design
const res=await axios.get(`http://localhost:5000/getdata/`);
*/



//http://localhost:5000/getsingle

// get single or particular column data 
app.get('/getsingle1', async (req, resp) => {
    let conn = await dbConnect();
    data = await conn.find({id:1}).toArray();
    resp.send(data);
});

// npm i 
// get single id data  http://localhost:5000/get_id/5 

app.get('/get_id/:_id', async (req, resp) => {
	console.log(req.params);
	// Convert string to ObjectId instance
	const myObjectId=new ObjectId(req.params._id)
	let conn = await dbConnect();
    data = await conn.find({_id:myObjectId}).toArray();
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


// body json data
app.get('/getsingle3', async (req, resp) => {
    let conn = await dbConnect();
    data = await conn.find(req.body).toArray(); // body json data
	console.log(req.body);
    resp.send(data);
});


//=========================================================================


// In react const res=await axios.post(`http://localhost:5000/insertdate`,formvalue);


// data insert static   http://localhost:5000/postdata1
/*
app.get("/postdata1", async (req, resp) => {
    let data = await dbConnect();
    let result = await data.insertOne({id: 1,name:'pinal',email:'pinal@gmail.com',password:'71234'})
    resp.send({result:"Static Data Inserted Success"});
})
*/

// http://localhost:5000/insertdate
app.post('/insertdate', async (req, resp) => {
    let conn = await dbConnect();
    data = await conn.insertOne(req.body); // body json data
	console.log(req.body);
    resp.send({result:"Postman Data Inserted Success"});
});

// http://localhost:5000/putdata
app.put("/putdata1", async (req, resp) => {
    const data = await dbConnect();
    let result = data.updateOne({id:req.body.id},{ $set: req.body })
    resp.send({ status: "updated" })
})

// http://localhost:5000/putdata/6a3908d66229e0ead208abd5
app.put("/putdata2/:_id", async (req, resp) => {
    const data = await dbConnect();
	const myObjectId=new ObjectId(req.params._id)
    let result = data.updateOne({_id:myObjectId},{ $set: req.body })
    resp.send({ status: "updated" })
})

//delete data static
// http://localhost:5000/deletedata1
app.delete("/deletedata1", async (req, resp) => {
    let data = await dbConnect();
	let result = await data.deleteOne({id:5})
    resp.send({ status: "data deleted" })
})


//delete data by body
// http://localhost:5000/deletedata2
app.delete("/deletedata2", async (req, resp) => {
    let data = await dbConnect();
	let result = await data.deleteMany(req.body)
    resp.send({ status: "data deleted" })
})


http://localhost:5000/deletedata3/6a3908d66229e0ead208abd5
app.delete("/deletedata3/:_id", async (req, resp) => {
    let data = await dbConnect();
	const myObjectId=new ObjectId(req.params._id)
	let result = await data.deleteOne({_id:myObjectId})
	console.log(req.query);
    resp.send({ status: "data deleted" })
});

app.listen(5000);



