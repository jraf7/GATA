const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: "Username is Required"
  },
  password: {
    type: String,
    required: "Password is Required",
    validate: [
      function (input) {
        return input.length >= 6;
      },
      "Password needs to be at least 6 characters long."
    ]
  },
  firstName: {
    type: String,
    required: "A First and Last name is Required"
  },
  lastName: {
    type: String,
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
