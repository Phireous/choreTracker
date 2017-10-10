const router = require("express").Router();
const userRoute = require("./userRoute");
const loginRoute = require("./loginRoute");
const choreRoutes = require("./chores");

router.use("/api", userRoute, loginRoute, choreRoutes);

module.exports = router;