const router = require("express").Router();
const journalsController = require("../controllers/journalsController");

router.route("/")
    .get(journalsController.findAll)
    .post(journalsController.create);

//matcch with "/api/tasks/:id"
router.route("/:id")
    .get(journalsController.findById)
    .put(journalsController.update)
    .delete(journalsController.remove)

module.exports = router;