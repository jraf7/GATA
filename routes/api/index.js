const router = require("express").Router();
const taskRoutes = require("./tasks");
const userRoutes = require("./users");

// routes
router.use("/tasks", taskRoutes);
router.use("/users", userRoutes);

module.exports = router;