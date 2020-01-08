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
      createdAt: String
    }
  ],
  journalEntries: [
    {
      type: String,
      entry: String,
      createdAt: String
    }
  ],

  tasks: [
    {
      type: String,
      name: String,
      createdAt: String
    }
  ]
});

const User = mongoose.model("User", userSchema);
module.exports = User;

// { weight: },
// { dream journal:}
// { }
