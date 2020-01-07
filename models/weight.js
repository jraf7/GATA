const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weightSchema = new Schema( {
    weight: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        default: Date.now,
        required: true
    },

})

const Weight = mongoose.model("weight", weightSchema);

module.exports = Weight;