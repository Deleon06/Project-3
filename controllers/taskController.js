const db = require("../models");

// Defining methods for the taskController
module.exports = {
  findAll: function(req, res) {
    db.Task
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Task
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const task = {
      title: req.body.title,
      description: req.body.description,
      duedate: req.body.duedate
  }
  db.Task
      .create(task)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},
  update: function(req, res) {
    db.Task
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Task
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};