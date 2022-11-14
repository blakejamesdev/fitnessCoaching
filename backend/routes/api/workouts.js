// IMPORT EXPRESS IN ORDER TO CREATE ROUTERS
const express = require("express");

// IMPORT USER CONTROLLER
const workoutController = require("../../controllers/api/workoutController");

// Use express to create a router
const router = express.Router();

// Use the router to redirect to different controller depending on the method
router.route("/").post(workoutController.createWorkout);
router.route("/:id").post(workoutController.deleteWorkout)

// EXPORT ROUTER TO BE USED IN OTHER PARTS OF OUR APPLICATION
module.exports = router;