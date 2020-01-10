const mongoose = require("mongoose");
const User = require("../models/user");

//empties task collection & inserts these tasks

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gata");

const taskSeed = [
  {
    name: "Wake Up: 6 am",
    completed: true,
    createdAt: new Date(2019, 12, 20).toString()
  },
  {
    name: "Morning Reflection",
    completed: true,
    createdAt: new Date(2019, 12, 20)
  },
  {
    name: "Workout",
    completed: true,
    createdAt: new Date(2019, 12, 20)
  },
  {
    name: "Don't Eat Junkfood",
    completed: false,
    createdAt: new Date(2019, 12, 20)
  },
  {
    name: "Bed by 11pm",
    completed: true,
    createdAt: new Date(2019, 12, 20)
  }
];

const weightSeed = [
  {
    weight: 200,
    createdAt: new Date(2019, 12, 20)
  },
  {
    weight: 202,
    createdAt: new Date(2019, 12, 10)
  },
  {
    weight: 205,
    createdAt: new Date(2019, 12, 01)
  }
];

const journal = [
  {
    category: "dream",
    entry: "Falling from the sky, my biggest fear!",
    createdAt: new Date(2019, 12, 20)
  },
  {
    category: "food",
    entry: "Had the best cauliflower pizza in my life!!",
    createdAt: new Date(2019, 12, 20)
  },
  {
    category: "Intimate",
    entry: "Uhhhhhhhhh",
    createdAt: new Date(2019, 12, 20)
  }
];

const userSeed = [
  {
    username: "username",
    password: "password",
    firstName: "Joe",
    lastName: "Dirt",
    email: "joedirt@amazinggrowth.com",
    weightEntries: weightSeed,
    tasks: taskSeed,
    journalEntries: journal
  }
];

User.remove({})
  .then(() => User.collection.insert(userSeed))
  .then(data => {
    console.log("User inserted");
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
