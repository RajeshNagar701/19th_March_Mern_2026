// npm i mongodb => Mongo database connectivity

const {MongoClient}=require('mongodb') // 1) impload mongodb
const client=new MongoClient('mongodb://localhost:27017/');  // 2) Create object for connectivity

async function dbConnect()
{
    let result = await client.connect();
    db= result.db('14th_feb');
    return db.collection('post');
}
module.exports= dbConnect;
