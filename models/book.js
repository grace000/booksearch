const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    id: String,
    title: String,
    authors: [String],
    description: String,
    publisher: String,
    image: String,
    infoLink: String,
    users: [String]
});

// Create the Model
const Book = mongoose.model("Book", BookSchema);

module.exports = Book;