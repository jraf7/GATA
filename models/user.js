//user
//password

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema( {
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
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Task"
        }
    ],
    weight: [
        {
            type: Number,
            createdAt: Date
        }
    ]

})

const User = mongoose.model("User", userSchema);
module.exports = User;