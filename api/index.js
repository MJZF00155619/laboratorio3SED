const express = require("express");
const mongoose = require("mongoose");
const app = express();

const CupcakesModel = require("./models/Cupcakes");

app.use(express.json());

mongoose.connect("mongodb+srv://mz:D0eDefkAQru@cupcakescrud.1nbnp.mongodb.net/cupcakes?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.get('/', async (req, res) => {
    const cupcake = new CupcakesModel({name: "chocolate", price: 1});
    try{
        await cupcake.save();
        res.send(" inserted data");
    } catch(err){
        console.log(err);
    }
});


app.listen(3000, () => {
    console.log("Servidor en el puerto 3000...");
});