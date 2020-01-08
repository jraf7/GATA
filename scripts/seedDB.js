const mongoose = require("mongoose");
const db = require("../models");

//empties task collection & inserts these tasks

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gata");

const taskSeed = [
  {
    task: "Wake Up: 6 am",
    completed: true,
    createdAt: new Date(2019, 12, 20).toString()
  },
  {
    task: "Morning Reflection",
    completed: true,
    createdAt: new Date(2019, 12, 20)
  },
  {
    task: "Workout",
    completed: true,
    createdAt: new Date(2019, 12, 20)
  },
  {
    task: "Don't Eat Junkfood",
    completed: false,
    createdAt: new Date(2019, 12, 20)
  },
  {
    task: "Bed by 11pm",
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
    type: "dream",
    entry: "Falling from the sky, my biggest fear!",
    createdAt: new Date(2019, 12, 20)
  },
  {
    type: "food",
    entry: "Had the best cauliflower pizza in my life!!",
    createdAt: new Date(2019, 12, 20)
  },
  {
    type: "Intimate",
    entry: "Uhhhhhhhhh",
    createdAt: new Date(2019, 12, 20)
  }
];

const userSeed = [
  {
    username: "username",
    password: "password",
    name: "Joe Dirt",
    weightEntries: weightSeed,
    tasks: taskSeed,
    journalEntries: journal
  }
];

db.User.remove({})
  .then(() => db.User.collection.insert(userSeed))
  .then(data => {
    console.log("User inserted");
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
