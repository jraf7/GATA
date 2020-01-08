//methods for Weight controller
const User = require("../../models/user");

module.exports = {
    findAll: function(req, res) {
        User.weightEntries
            .find(req.query)
            .sort({ date: -1 })
            .then(dbWeights => res.json(dbWeights))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        User.weightEntries
            .findById(req.params.id)
            .then(dbWeight => res.json(dbWeight))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        User.weightEntries
            .create(req.body)
            .then(dbWeight => res.json(dbWeight))
            .catch(err => res.status(422).json(err))
    },
    update: function (req, res) {
        User.weightEntries
            .findOneAndUpdate({ _id: req.params.id}, req.body)
            .then(dbWeight => res.json(dbWeight))
            .catch(err => res.error(422).json(err))
    },
    remove: function (req, res) {
        User.weightEntries
            .findById( { _id: req.params.id } )
            .then(dbWeight => dbWeight.remove())
            .then(dbWeight => res.json(dbWeight))
            .catch(err => res.status(422).json(err))
    }
};