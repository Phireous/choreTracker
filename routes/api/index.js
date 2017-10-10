const router = require("express").Router();
const choreRoutes = require("./chores");

router.use(choreRoutes);

module.exports = router;
