//methods for User controller
const User = require("../models/user");

module.exports = {
  findAll: function(req, res) {
    User.find(req.query)
      // .sort({ _id: -1 })
      .then(dbUsers => res.json(dbUsers))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    User.findById(req.params.id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    User.create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.error(422).json(err));
  },
  remove: function(req, res) {
    User.findById({ _id: req.params.id })
      .then(dbUser => dbUser.remove())
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
};
