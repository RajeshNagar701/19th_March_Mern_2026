const {MongoClient} = require('mongodb')
const client= new MongoClient('mongodb://localhost:27017');

async function dbConnect()
{
    let conn = await client.connect();
    db= conn.db('14th_feb');
    return db.collection('users');
}
module.exports= dbConnect;
