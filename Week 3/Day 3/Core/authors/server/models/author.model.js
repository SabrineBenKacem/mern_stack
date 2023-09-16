const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author Name  is required ❌❌❌"],
        minlength: [3, "Author Name must be greater than 3 characters"]
    }
}, { timestamps: true });

const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;