const router = require("express").Router();
const tasksController = require("../../controllers/tasksController");

//match with "/api/tasks"
router
  .route("/")
  .get(tasksController.findAll)
  .post(tasksController.create);

//matcch with "/api/tasks/:id"
router
  .route("/:id")
  .get(tasksController.findById)
  .put(tasksController.update)
  .delete(tasksController.remove);

module.exports = router;
