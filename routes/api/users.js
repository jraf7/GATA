const router = require("express").Router();
const usersController = require("../controllers/usersController");
const taskRoutes = require("./task.js");
const weightRoutes = require("./weight");
const journalRoutes = require("./journal")

//match with "/api/users"
router.route("/")
    .get(usersController.findAll)
    .post(usersController.create);

//matcch with "/api/tasks/:id"
router.route("/:id")
    .get(usersController.findById)
    .put(usersController.update)
    .delete(usersController.remove)

router.use("/task", taskRoutes);
router.use("/weight", weightRoutes);
router.use("/journal", journalRoutes);


module.exports = router;