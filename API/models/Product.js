const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema(
    {
        name:{type: String, required:true, unique:true},
        price:{type: String, required:true},
        imagen:{type: String, required:true},
        size:{type: String, required:true},
        description:{type: String, required:true},
        categories:{type: Array},
        stock:{type: String, required:true},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);