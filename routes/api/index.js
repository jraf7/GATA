const router = require("express").Router();
const taskRoutes = require("./tasks");
const userRoutes = require("./users");
const weightRoutes = require("./weight");

// routes
router.use("/tasks", taskRoutes);
router.use("/users", userRoutes);
router.use("/weight", weightRoutes);

module.exports = router;