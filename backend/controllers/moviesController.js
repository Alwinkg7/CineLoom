const Movie = require("../models/Movie");

// Get all movies
exports.getAllMovies = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const movies = await Movie.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Movie.countDocuments();

    res.json({
      movies,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching movies" });
  }
};

// Watch a movie (requires subscription)
exports.watchMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    
    res.json({ 
      title: movie.title,
      videoUrl: movie.videoUrl,
      description: movie.description,
      duration: movie.duration
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching movie" });
  }
};

// Search and filter movies
exports.searchMovies = async (req, res) => {
  try {
    const { q, genre, language, year } = req.query;
    let query = {};

    if (q) {
      query.$or = [
        { title: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } }
      ];
    }
    if (genre) {
      query.genre = genre;
    }
    if (language) {
      query.language = language;
    }
    if (year) {
      query.releaseYear = year;
    }

    const movies = await Movie.find(query);
    res.json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error searching movies" });
  }
};