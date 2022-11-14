// IMPORT EXPRESS IN ORDER TO CREATE ROUTERS
const express = require("express");

// IMPORT USER CONTROLLER
const macroController = require("../../controllers/api/macroController");

// Use express to create a router
const router = express.Router();

// Use the router to redirect to different controller depending on the method
router.route("/").post(macroController.createMacro);
router.route("/:id").post(macroController.deleteMacro)

// EXPORT ROUTER TO BE USED IN OTHER PARTS OF OUR APPLICATION
module.exports = router;