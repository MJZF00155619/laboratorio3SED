const mongoose = require('mongoose');

const CupcakesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
});

const Cupcakes = mongoose.model("cupcakesInfo", CupcakesSchema);
module.exports = Cupcakes;