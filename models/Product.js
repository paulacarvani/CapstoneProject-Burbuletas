const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema(
    {
        name:{type: String, required:true, unique:true},
        price:{type: Number, required:true},
        weight:{type: String, required:true},
        descriptions:{type: String, required:true},
        thumbnail:{type: String, required:true},
        img:{type: String, required:true},
        category:{type: Array},
        stock:{type: Number, required:true},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);