const router = require("express").Router();
const choreController = require("../../controllers/choreController");

router
	.route("/chores")
	.get(choreController.findAll)
	.post(choreController.create);

router
	.route("/accept/:id")
	.post(choreController.accept);

router
	.route("/reject/:id")
	.post(choreController.reject);

module.exports = router;