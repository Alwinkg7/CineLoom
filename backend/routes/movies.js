const express = require("express");
const router = express.Router();
const { auth, requireSubscription } = require("../middleware/auth");
const movieController = require("../controllers/moviesController");

// Search & Filter (must come first so /search doesn't conflict with :id)
router.get("/search", movieController.searchMovies);

// Public: Get all movies
router.get("/", movieController.getAllMovies);

// Protected: Watch a movie (requires subscription)
router.get("/:id/watch", auth, requireSubscription, movieController.watchMovie);

module.exports = router;