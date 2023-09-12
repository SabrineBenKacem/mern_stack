const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required ❌❌❌"],
        minlength: [3, "Title must be greater than 3 characters"]
    },
   
    price: {
        type: Number,
        required: [true, "{PATH} is very required"],
        min: 0,
        
    },
    description: {
        type: String,
        required: [true, "Description is required ❌❌❌"],
        minlength: [3, "Description must be greater than 3 characters"]
    }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;