const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema(
    {
        name:{type: String, required:true, unique:true},
        price:{type: String, required:true},
        image:{type: String, required:true},
        size:{type: String, required:true},
        description:{type: String, required:true},
        categories:{type: Array},
        stock:{type: String, required:true},
        fullsize:{type: String, required:true},
        decoration:{type: String, required:true},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);