const router = require("express").Router();
const usersController = require("../controllers/usersController");

//match with "/api/users"
router.route("/")
    .get(usersController.findAll)
    .post(usersController.create);

//matcch with "/api/tasks/:id"
router.route("/:id")
    .get(usersController.findById)
    .put(usersController.update)
    .delete(usersController.remove)

module.exports = router;