import React, { useEffect, useState } from "react";
import {
  Box,
  Select,
  Heading,
  Grid,
  Image,
  Text,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import ImageSlider from "../components/home/ImageCarousel"; // adjust path if needed

const FilterMovies = () => {
  const [movies, setMovies] = useState([]);
  const [language, setLanguage] = useState("");
  const [genre, setGenre] = useState("");
  const [sortType, setSortType] = useState(""); // "latest" or "popular"
  const [loading, setLoading] = useState(false);

  const fetchFilteredMovies = async () => {
    setLoading(true);
    try {
      let query = "";
      if (language) query += `language=${language}`;
      if (genre) query += `${query ? "&" : ""}genre=${genre}`;
      if (sortType) query += `${query ? "&" : ""}sort=${sortType}`;

      const res = await axios.get(`/api/movies/search?${query}`);
      setMovies(res.data);
    } catch (err) {
      console.error("Failed to fetch filtered movies", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFilteredMovies();
  }, [language, genre, sortType]);

  return (
    <Box px={4} py={6}>
      {/* Carousel */}
      <Box mb={8}>
        <ImageSlider />
      </Box>

      {/* Heading */}
      <Heading size="lg" mb={4} textAlign="center">
        Filter Movies
      </Heading>

      {/* Filters */}
      <Box display="flex" gap={4} mb={6} flexWrap="wrap" justifyContent="center">
        <Select
          placeholder="Select Language"
          onChange={(e) => setLanguage(e.target.value)}
          w="200px"
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Tamil">Tamil</option>
        </Select>

        <Select
          placeholder="Select Genre"
          onChange={(e) => setGenre(e.target.value)}
          w="200px"
        >
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
        </Select>

        <Select
          placeholder="Sort By"
          onChange={(e) => setSortType(e.target.value)}
          w="200px"
        >
          <option value="latest">Latest</option>
          <option value="popular">Popular</option>
        </Select>
      </Box>

      {/* Movie List */}
      {loading ? (
        <Box textAlign="center" mt={8}>
          <Spinner size="xl" />
        </Box>
      ) : (
        <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
          {movies.map((movie) => (
            <Box
              key={movie._id}
              border="1px"
              borderColor="gray.200"
              p={4}
              borderRadius="md"
              _hover={{ boxShadow: "md" }}
            >
              <Image
                src={movie.posterUrl}
                alt={movie.title}
                w="100%"
                h="300px"
                objectFit="cover"
                borderRadius="md"
              />
              <Text mt={2} fontWeight="bold" isTruncated>
                {movie.title}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {movie.language} | {movie.genre}
              </Text>
            </Box>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default FilterMovies;
