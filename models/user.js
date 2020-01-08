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
      type: String,
      entry: String,
      createdAt: Date
    }
  ],

  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task"
    }
  ],
  weight: [
    {
      type: Schema.Types.ObjectId,
      ref: "Weight"
    }
  ]
});

const User = mongoose.model("User", userSchema);
module.exports = User;

// { weight: },
// { dream journal:}
// { }
