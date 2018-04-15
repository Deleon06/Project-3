const router = require("express").Router();
const taskRoutes = require("./task");

// tasks routes
router.use("/task", taskRoutes);

module.exports = router;