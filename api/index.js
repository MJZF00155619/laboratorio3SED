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
        res.send("Insercion exitosa");
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

app.put("/update", async (req, res) => {

    const newCupName = req.body.newCupName;
    const id = req.body.id;

    try{
        await CupcakesModel.findById(id, (err, updatedCup)=>{
            updatedCup.name = newCupName;
            updatedCup.save();
            res.send("update");
        });
    } catch(err){
        console.log(err);
    }
});

app.delete("/delete/:id", async (req, res)=> {
    const id = req.params.id;

    await CupcakesModel.findByIdAndRemove(id).exec();
    res.send("Eliminado")
})

app.listen(5000, () => {
    console.log("Servidor en el puerto 5000...");
});