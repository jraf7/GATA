//methods for Weight controller
const User = require("../models/user");

module.exports = {
  findAll: function (req, res) {
    User
      .findById(req.user._id)
      .then(dbUser => {
        res.json(dbUser.weightEntries);
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    User
      .findById(req.params.id)
      .then(dbWeight => res.json(dbWeight))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    User
      .create(req.body)
      .then(dbWeight => res.json(dbWeight))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbWeight => res.json(dbWeight))
      .catch(err => res.error(422).json(err));
  },
  remove: function (req, res) {
    User
      .findById({ _id: req.params.id })
      .then(dbWeight => dbWeight.remove())
      .then(dbWeight => res.json(dbWeight))
      .catch(err => res.status(422).json(err));
  }
};


