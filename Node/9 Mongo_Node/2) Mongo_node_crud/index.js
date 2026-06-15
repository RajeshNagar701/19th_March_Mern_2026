
const dbConnect= require('./conn');


// SELECT ALL USER COLLECTION DATA

/*
const getdata=async ()=>{
   let data = await dbConnect();
   let result = await data.find({}).toArray();
   console.log(result)
}
getdata();
*/


// SELECT SINGLE COLLECTION DATA

/*
const singledata=async ()=>{
   let data = await dbConnect();
   let result = await data.find({'id':10}).toArray();
   console.log(result)
}
singledata();
*/



// insert COLLECTION DATA
/*
const insertdata=async ()=>{
   let data = await dbConnect();
   let result = await data.insertMany([
          {
			id: 101,
			name: "Leanne Graham",
			username: "Bret",
			email: "Sincere@april.biz",
			address: {
			  street: "Kulas Light",
			  suite: "Apt. 556",
			  city: "Gwenborough",
			  zipcode: "92998-3874",
			  geo: {
				lat: "-37.3159",
				lng: "81.1496"
			  }
			},
			phone: "1-770-736-8031 x56442",
			website: "hildegard.org",
			company: {
			  name: "Romaguera-Crona",
			  catchPhrase: "Multi-layered client-server neural-net",
			  bs: "harness real-time e-markets"
			}
		  },
		  {
			id: 102,
			name: "Ervin Howell",
			username: "Antonette",
			email: "Shanna@melissa.tv",
			address: {
			  street: "Victor Plains",
			  suite: "Suite 879",
			  city: "Wisokyburgh",
			  zipcode: "90566-7771",
			  geo: {
				lat: "-43.9509",
				lng: "-34.4618"
			  }
			},
			phone: "010-692-6593 x09125",
			website: "anastasia.net",
			company: {
			  name: "Deckow-Crist",
			  catchPhrase: "Proactive didactic contingency",
			  bs: "synergize scalable supply-chains"
			}
		  }
      ]
	);
	if(result)
	{
		console.log('data inserted success');
	}
}
insertdata();
*/

/*
const updateData=async ()=>{
    let data = await dbConnect();
    let result = await data.updateMany(
        { id:102},
        {
            $set:{name:'New Title'}
        }
      )
	if(result)
	{
		console.warn("data is Updated")
	}
}
updateData();
*/


const deleteData=async ()=>{
	let data = await dbConnect();
	let result = await data.deleteOne({id:102});
	if(result)
	{
		console.warn("data is Deleted")
	}
}
deleteData();

