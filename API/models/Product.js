const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema(
    {
        name:{type: String, required:true, unique:true},
        Price:{type: String, required:true},
        Imagen:{type: String, required:true},
        size:{type: String, required:true},
        descriptions:{type: String, required:true},
        category:{type: Array},
        stock:{type: String, required:true},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);