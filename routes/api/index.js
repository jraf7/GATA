const router = require("express").Router();
const taskRoutes = require("./tasks");
const userRoutes = require("./users");
const weightRoutes = require("./weight");

// routes
router.use("/tasks", taskRoutes);
router.use("/users", userRoutes);
router.use("/weights", weightRoutes);

module.exports = router;