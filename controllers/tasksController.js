//methods for task controller
let mongoose = require("mongoose");
const User = require("../models/user");

//exports mongoDB functions to be used in api routing for tasks

module.exports = {
  findAll: function(req, res) {
    User.tasks
      .find(req.query)
      .sort({ date: -1 })
      .then(dbTasks => res.json(dbTasks))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    User.tasks
      .findById(req.params.id)
      .then(dbTask => res.json(dbTask))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    User.tasks
      .create(req.body)
      .then(dbTask => res.json(dbTask))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    User.tasks
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbTask => res.json(dbTask))
      .catch(err => res.error(422).json(err));
  },
  remove: function(req, res) {
    User.tasks
      .findById({ _id: req.params.id })
      .then(dbTask => dbTask.remove())
      .then(dbTask => res.json(dbTask))
      .catch(err => res.status(422).json(err));
  }
};
