import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Stack,
  Tag,
  Image,
  Divider,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import MovieCard from "../components/Movie/MovieCard"; // Optional reusable card

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(`/api/movies/${id}`);
        setMovie(res.data);

        // fetch recommended movies
        const genre = res.data.genre;
        const recRes = await axios.get(`/api/movies/search?genre=${genre}`);
        setRecommended(recRes.data.filter((m) => m._id !== id)); // exclude current movie
        setLoading(false);
      } catch (err) {
        console.error("Error fetching movie:", err);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" />
      </Box>
    );
  }

  if (!movie) {
    return (
      <Box textAlign="center" py={10}>
        <Text>Movie not found</Text>
      </Box>
    );
  }

  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <Stack direction={["column", "row"]} spacing={6}>
        <Image
          src={movie.thumbnail || "/placeholder.jpg"}
          alt={movie.title}
          borderRadius="md"
          boxSize="300px"
          objectFit="cover"
        />

        <Box>
          <Heading size="lg">{movie.title}</Heading>
          <Text fontSize="md" mt={2}>
            {movie.plot}
          </Text>

          <Stack direction="row" mt={4} wrap="wrap">
            <Tag colorScheme="teal">Genre: {movie.genre}</Tag>
            <Tag colorScheme="orange">Language: {movie.language}</Tag>
            <Tag colorScheme="blue">Release: {movie.releaseDate}</Tag>
            <Tag colorScheme="purple">Views: {movie.views}</Tag>
          </Stack>

          <Text mt={4} fontWeight="bold">
            Cast:
          </Text>
          <Text>{movie.cast.join(", ")}</Text>
        </Box>
      </Stack>

      <Divider my={8} />

      <Box>
        <Heading size="md" mb={4}>
          More like this
        </Heading>

        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {recommended.map((rec) => (
            <MovieCard key={rec._id} movie={rec} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default MovieDetail;
