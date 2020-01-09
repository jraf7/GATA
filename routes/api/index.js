const router = require("express").Router();
const userRoutes = require("./users");

// route
router.use("/users", userRoutes);

module.exports = router;