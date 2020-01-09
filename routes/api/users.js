const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const taskRoutes = require("./tasks");
const weightRoutes = require("./weight");
const journalRoutes = require("./journal");

//match with "/api/users"
router
  .route("/")
  .get(usersController.findAll)
  .post(usersController.create);

router.use("/task", taskRoutes);
router.use("/weight", weightRoutes);
router.use("/journal", journalRoutes);

//match with "/api/tasks/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
