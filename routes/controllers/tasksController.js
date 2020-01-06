//methods for task controller
module.exports = {
    findAll: function(req, res) {
        db.Task
            .find(req.query)
            .sort({date: -1})
            .then(dbTasks => res.json(dbTasks))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Task
            .findById(req.params.id)
            .then(dbTask => res.json(dbTask))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Task
            .create(req.body)
            .then(dbTask => res.json(dbTask))
            .catch(err => res.status(422).json(err))
    },
    update: function (req, res) {
        db.Task
            .findOneAndUpdate({ _id: req.params.id}, req.body)
            .then(dbTask => res.json(dbTask))
            .catch(err => res.error(422).json(err))
    },
    remove: function (req, res) {
        db.Task
            .findById( { _id: req.params.id } )
            .then(dbTask => dbTask.remove())
            .then(dbTask => res.json(dbTask))
            .then(err => res.status(422).json(err))
    }
};