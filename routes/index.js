const router = require("express").Router();
const userRoute = require("./userRoute");
const loginRoute = require("./loginRoute");

router.use("/api", userRoute, loginRoute);

module.exports = router;