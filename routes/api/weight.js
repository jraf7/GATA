const router = require("express").Router();
const weightController = require("../../controllers/weightsController");

//match with "/api/users"
router
  .route("/")
  .get(weightController.findAll)
  .post(weightController.create);

//matcch with "/api/tasks/:id"
router
  .route("/:id")
  .get(weightController.findById)
  .put(weightController.update)
  .delete(weightController.remove);

module.exports = router;
