const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    // image:Buffer,
    price: Number,
    category: String});

    module.exports = mongoose.model("Product", productSchema);