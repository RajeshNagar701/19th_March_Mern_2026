
var mongoose = require('mongoose'); // import mongoose module
mongoose.connect('mongodb://localhost:27017/14th_feb'); // conect mongodb

var express = require('express');
const app = express();
app.use(express.json());

// CREATE SCHEMA
var post_schema =new  mongoose.Schema({
	userId: {
		type: Number,
		required: [true, "UserId number is required"]
	},
	id: {
		type: Number,
		unique: true,
		required: [true, "ID number is required"]
	},
	title: {
		type: String,
		required: [true, "Title is required"]
	},
	body: {
		type: String,
		required: [true, "Body is required"]
	}
});

// create model & apply schema on model , they connect directs posts table not post so add name by s
var post_model = mongoose.model('post', post_schema,'post');

//=====================================================================================
// get all data
app.get("/get_post", async (req, resp) => {
	let result = await post_model.find()
	resp.send(result);
});


// get data by column
app.get("/get_colum", async (req, resp) => {
	let data = await post_model.find({ userId: 1 });
	resp.send(data);
})


// get data by id  http://localhost:5000/get_params/69f1826acefb9d39e7cc6a89
app.get("/get_params/:_id", async (req, resp) => {
	console.log(req.params)
	let data = await post_model.find({ _id: req.params });
	resp.send(data);
})

// search data by patern column  http://localhost:5000/get_search/raj
app.get("/get_search/:pattern", async (req, resp) => {
	//console.log(req.params.key);
	let data = await post_model.find({
		"$or": [
			{ title: { $regex: req.params.pattern, $options: "i" } },  //$option  for case incensitive
			{ body: { $regex: req.params.pattern, $options: "i" } }
		]
	});
	resp.send(data);
});





//================================================================================== 

// get data by id  http://localhost:5000/post_data
app.post("/post_data", async (req, resp) => {
    try {
        let data = new post_model(req.body);
        const result = await data.save();   // save() -> insertOne
        console.log(result);
        resp.status(201).send(result);

    } catch (error) {
        console.log(error);
        resp.status(500).send({
            message: error.message
        });
    }
});

app.delete("/delete_data/:_id", async (req, resp) => {
    try {			
        let result = await post_model.deleteOne(req.params); //findByIdAndDelete(id)
        console.log(result);
        resp.status(200).send(result);

    } catch (error) {
        console.log(error);
        resp.status(500).send({
            message: error.message
        });
    }
});

app.put("/update_data/:_id", async (req, resp) => {
    try {
        let result = await post_model.updateOne(req.params,
        {$set: req.body});
        console.log(result);
        resp.status(200).send(result);

    } catch (error) {
        console.log(error);
        resp.status(500).send({
            message: error.message
        });
    }
});

app.listen(5000);