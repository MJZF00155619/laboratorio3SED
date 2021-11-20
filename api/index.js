const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');

const CupcakesModel = require("./models/Cupcakes");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://mz:D0eDefkAQru@cupcakescrud.1nbnp.mongodb.net/cupcakes?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.post("/insert", async (req, res) => {

    const name = req.body.name;

    const cupcake = new CupcakesModel({name: name});
    try{
        await cupcake.save();
        res.send(" inserted data");
    } catch(err){
        console.log(err);
    }
});

app.get("/read", async (req, res) => {
    CupcakesModel.find({}, (err, result)=> {
        if(err){
            res.send(err)
        }

            res.send(result)
    })
});

app.listen(5000, () => {
    console.log("Servidor en el puerto 5000...");
});