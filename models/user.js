const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    weightEntries: [
        {
            weight: Number,
            createdAt: Date
        }
    ],
    journalEntries: [
        {
            type: ["dream", "food", "intimate"],
            entry: String,
            createdAt: Date
        }
    ]
})

const User = mongoose.model("User", userSchema);
module.exports = User;


{ weight: },
{ dream journal:},
{ }