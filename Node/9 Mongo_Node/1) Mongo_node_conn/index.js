
// npm i express mongodb 

// MongoDB Connection
const {MongoClient} = require('mongodb')   // import mongodb 
const conn= new MongoClient('mongodb://localhost:27017');  


async function getData()
{
    let result = await conn.connect();
    db= result.db('14th_feb'); // db_name
    collection = db.collection('users');  // collection_name /table
    let data = await collection.find({}).toArray(); // fetch all data
    console.log(data);
}
getData();


