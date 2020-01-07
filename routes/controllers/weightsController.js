//methods for Weight controller
const db = require("../../models");

module.exports = {
    findAll: function(req, res) {
        db.Weight
            .find(req.query)
            .sort({ date: -1 })
            .then(dbWeights => res.json(dbWeights))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Weight
            .findById(req.params.id)
            .then(dbWeight => res.json(dbWeight))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Weight
            .create(req.body)
            .then(dbWeight => res.json(dbWeight))
            .catch(err => res.status(422).json(err))
    },
    update: function (req, res) {
        db.Weight
            .findOneAndUpdate({ _id: req.params.id}, req.body)
            .then(dbWeight => res.json(dbWeight))
            .catch(err => res.error(422).json(err))
    },
    remove: function (req, res) {
        db.Weight
            .findById( { _id: req.params.id } )
            .then(dbWeight => dbWeight.remove())
            .then(dbWeight => res.json(dbWeight))
            .catch(err => res.status(422).json(err))
    }
};