const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema( {
    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    date: {
        type: String,
        default: Date.now,
        required: true
    }

})

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;