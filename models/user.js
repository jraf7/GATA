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
      category: String,
      entry: String,
      createdAt: Date
    }
  ],
  tasks: [
    {
      name: String,
      completed: false,
      createdAt: Date
    }
  ]
});

const User = mongoose.model("User", userSchema);
module.exports = User;

// { weight: },
// { dream journal:}
// { }
