const router = require("express").Router();
const userRoute = require("./userRoute");
const loginRoute = require("./loginRoute");
const choreRoutes = require("./chores");
const authCheckMiddleware = require("../server/middleware/auth-check");

router.use("/api", userRoute, loginRoute, choreRoutes, authCheckMiddleware);

module.exports = router;