const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    id: String,
    url: String,
    users:[{ type: Schema.Types.ObjectId, ref: 'User' }]
});

// Create the Model
const Book = mongoose.model("Book", BookSchema);

module.exports = Book;