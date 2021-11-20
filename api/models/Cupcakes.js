const mongoose = require('mongoose');

const CupcakesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    price: {
        type: Number,
        require: true
    },
});

const Cupcakes = mongoose.model("cupcakesInfo", CupcakesSchema);
module.exports = Cupcakes;