const express = require("express");
const conn = require('./conn');
const app = express();

app.use(express.json());

// Get Data from postgresql  http://localhost:5000/

app.get("/", async (req, res) => {
  try {
    const cars = await conn.query('SELECT * FROM cars ORDER BY id ASC');
    res.send(cars.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


// Get Data from postgresql  http://localhost:5000/
app.get("/cars/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await conn.query("SELECT * FROM cars WHERE id = $1", [id]);
    res.send(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

// Insert Data in mysqli

app.post("/insert", async (req, res) => {
  try {
    const { brand, model, year } = req.body;
    const result = await conn.query("INSERT INTO cars(brand,model,year) values($1,$2,$3)", [brand, model, year]);
    res.send({
      message: "Data inserted successfully",
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Update Data in mysqli

app.put("/update/:id", async(req, res) => {
  try {
    const id = req.params.id;
    const { brand, model, year } = req.body;
    const result = await conn.query("update cars set brand=$1, model=$2,year=$3 WHERE id = $4", [brand,model,year,id]);
    res.send({
      message: "Data Updated successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }

})

// Delete Data in mysqli

app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await conn.query("delete FROM cars WHERE id = $1", [id]);
    res.send({
      message: "Data Deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
})


app.listen("5000")
