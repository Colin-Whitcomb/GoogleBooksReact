const db = require("../models")

module.exports = {

    findAll: function(req, res) {
        db.Book.find()
            .then(data => res.json(data))
            .catch(err => console.log(err))
    },

    findOne: function(req, res) {
        db.Book.findById(req.params.id)
            .then(data => res.json(data))
            .catch(err => console.log(err))
    },

    create: function(req, res) {
        console.log('create init');
        db.Book.create(req.body)
        .then(data => res.json(data))
        .catch(err => console.log(err))
    },

    update: function(req, res) {
        db.Book.findOneAndUpdate({_id: req.params.id}, req.body)
            .then(data => res.json(data))
            .catch(err => console.log(err))
    },

    remove: function(req, res) {
        db.Book.findById({_id: req.params.id})
            .then(data => data.remove())
            .then(data => res.json(data))
            .catch(err => console.log(err))
    }


}
