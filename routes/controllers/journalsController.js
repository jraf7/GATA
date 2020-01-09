//methods for task controller
let mongoose = require('mongoose');
const User = require("../../models/user")

//exports mongoDB functions to be used in api routing for tasks

module.exports = {
    findAll: function(req, res) {
        User.journalEntries
            .find(req.query)
            .sort({date: -1})
            .then(dbJournal => res.json(dbJournal))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        User.journalEntries
            .find(req.params.id)
            .then((dbJournal)=> res.json(dbJournal))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        User.journalEntries
            .create(req.body)
            .then(dbJournal => res.json(dbJournal))
            .catch(err => res.status(422).json(err))
    },
    update: function (req, res) {
        User.journalEntries
            .findOneAndUpdate({ _id: req.params.id}, req.body)
            .then(dbJournal => res.json(dbJournal))
            .catch(err => res.error(422).json(err))
    },
    remove: function (req, res) {
        User.journalEntries
            .findById( { _id: req.params.id } )
            .then(dbJournal => dbJournal.remove())
            .then(dbJournal => res.json(dbJournal))
            .catch(err => res.status(422).json(err))
    }
};