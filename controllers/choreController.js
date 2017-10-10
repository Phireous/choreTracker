const db = require("../server/model");

module.exports = {

	findAll: function(req, res) {
		db.Chore
		  .find({})
		  .sort({ date: -1})
		  .then(dbModel => res.json(dbModel))
		  .catch(err => res.status(422).json(err));
	},
	create: function(req, res) {
		db.Chore
		  .create(req.body)
		  .then(dbModel => res.json(dbModel))
		  .catch(err => res.status(422).json(err));
	},
	accept: function(req, res) {
		db.Chore
		  .findOneAndUpdate({ _id: req.params.id }, {$set: {
				"inProgress": true
			}})
		  .then(dbModel => res.json(dbModel))
		  .catch(Err => res.status(422).json(err));
	},
	reject: function(req, res) {
		db.Chore
		  .findOneAndUpdate({ _id: req.params.id }, {$set: {
				"inProgress": false
			}})
		  .then(dbModel => res.json(dbModel))
		  .catch(Err => res.status(422).json(err));
	},
	remove: function(req, res) {
		db.Chore
		  .findbyId({ _id: req.params.id })
		  .then(dbModel => dbModel.remove())
		  .then(dbModel => res.json(dbModel))
		  .catch(err => res.status(422).json(err));
	}
};