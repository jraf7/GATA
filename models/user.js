const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: "Username is Required"
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password needs to be at least 6 characters long."
    ]
  },
  firstName: {
    type: String,
    trim: true,
    required: "A First and Last name is Required"
  },
  lastName: {
    type: String,
    trim: true,
    required: "A First and Last name is Required"
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  weightEntries: [
    {
      weight: Number,
      createdAt: String
    }
  ],
  journalEntries: [
    {
      category: String,
      entry: String,
      trim: true,
      createdAt: String
    }
  ],
  tasks: [
    {
      name: String,
      trim: true,
      completed: false,
      createdAt: String
    }
  ]
});

const User = mongoose.model("User", userSchema);
module.exports = User;

// { weight: },
// { dream journal:}
// { }
