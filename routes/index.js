const router = require("express").Router();
const userRoute = require("./userRoute");

router.use("/api", userRoute);

module.exports = router;