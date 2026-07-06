
// npm i mongoose express

var mongoose = require('mongoose'); 
mongoose.connect('mongodb+srv://admin:admin%40123@cluster0.u88lhmb.mongodb.net/19th_march'); // conect mongodb

var express = require('express');
const app = express();

/*
Cross-Origin Resource Sharing (CORS) in Node.js is a browser 
security mechanism configured on the server to allow or restrict 
web applications hosted on different domains from accessing your API resources.

*/
const cors = require("cors");   // npm i cors =>  add for real production  
app.use(cors());
app.use(express.json());

var blog_schema =new  mongoose.Schema({
	userId: {
		type: Number,
		required: [true, "UserId number is required"]
	},
	id: {
		type: Number,
		unique: true,
		required: [true, "UserId number is required"],
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

// create model & apply schema on model
var blog_model = mongoose.model('blogs', blog_schema);

// get all data
app.get("/get_blog", async (req, resp) => {
	let result = await blog_model.find()
	resp.send(result);
});

// Insert Data  http://localhost:5000/post_blog
app.post("/post_blog", async (req, resp) => {
    try {
        let data = new blog_model(req.body);
        const result = await data.save();
        console.log(result);
        resp.status(201).send(result);
    } catch (error) {
        console.log(error);
        resp.status(500).send({
            message: error.message
        });
    }
});

// Edit data by id  http://localhost:5000/edit_blog/6a2fa9274cbe2810e539bf1f
app.get("/edit_blog/:_id", async (req, resp) => {
	console.log(req.params)
	let data = await blog_model.find({ _id: req.params });
	resp.send(data);
})


app.put("/update_blog/:_id", async (req, resp) => {
    try {
        let result = await blog_model.updateOne(req.params,
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


app.delete("/delete_blog/:_id", async (req, resp) => {
    try {
        let result = await blog_model.deleteOne(req.params);
        console.log(result);
        resp.status(200).send(result);

    } catch (error) {
        console.log(error);
        resp.status(500).send({
            message: error.message
        });
    }
});


//================================================================================== 







var user_schema =new  mongoose.Schema({

});

// create model & apply schema on model
var user_model = mongoose.model('users', user_schema);

// get all users
app.get("/get_user", async (req, resp) => {
	let result = await user_model.find()
	resp.send(result);
});

app.listen(5000);