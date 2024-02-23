const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    typeOfFood: {
        type: String, 
        enum: ['Rice', 'Beans'],
        required: true
    },
    numberOfPlates: { 
        type: Number, 
        required: true },
},
{
    versionKey: false,
    timestamps: true,
});

module.exports = mongoose.model('Order', orderSchema);