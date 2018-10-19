const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    books:[{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

// Create the Model
const User = mongoose.model("User", UserSchema);

module.exports = User;