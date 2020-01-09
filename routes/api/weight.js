const router = require("express").Router();
const weightController = require("../../controllers/weightsController");

//match with "/api/users"
router
  .route("/")
  .get(function (req, res, next) {
    req.user = { _id: "5e161f25f6b2dd05f01d63f8" };
    next();
  }, weightController.findAll)
  .post(weightController.create);

//matcch with "/api/tasks/:id"
router
  .route("/:id")
  .get(weightController.findById)
  .put(weightController.update)
  .delete(weightController.remove);

module.exports = router;
