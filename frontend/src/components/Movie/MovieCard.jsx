// components/MovieCard.jsx
import { Box, Image, Text, Badge, Flex, Tooltip, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const toast = useToast();
  const [isPremiumUser, setIsPremiumUser] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.isPremium) {
      setIsPremiumUser(true);
    }
  }, []);

  const handleClick = () => {
    if (isPremiumUser) {
      navigate(`/movies/${movie._id}`);
    } else {
      toast({
        title: "Premium Access Only",
        description: "Please upgrade to a premium account to watch this movie.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      position="relative"
      borderRadius="2xl"
      overflow="hidden"
      _hover={{ transform: "scale(1.05)", transition: "0.3s", cursor: "pointer", shadow: "lg" }}
      bg="#1a1a1a"
      color="white"
      onClick={handleClick}
    >
      <Image
        src={movie.posterUrl}
        alt={movie.title}
        width="100%"
        height="280px"
        objectFit="cover"
      />

      <Box p={3}>
        <Flex justify="space-between" align="center">
          <Text fontSize="lg" fontWeight="bold" isTruncated>
            {movie.title}
          </Text>
          <Flex align="center" gap={1}>
            <StarIcon color="yellow.400" boxSize={4} />
            <Text fontSize="sm">{movie.rating || "N/A"}</Text>
          </Flex>
        </Flex>

        <Flex gap={2} mt={2} wrap="wrap">
          <Badge colorScheme="purple" fontSize="0.7em">
            {movie.language}
          </Badge>
          <Badge colorScheme="teal" fontSize="0.7em">
            {movie.genre}
          </Badge>
          {movie.releaseYear && (
            <Badge colorScheme="gray" fontSize="0.7em">
              {movie.releaseYear}
            </Badge>
          )}
        </Flex>

        {movie.views && (
          <Tooltip label={`${movie.views} views`} placement="top" hasArrow>
            <Text fontSize="xs" mt={2} color="gray.400">
              👁 {movie.views} views
            </Text>
          </Tooltip>
        )}
      </Box>
    </Box>
  );
};

export default MovieCard;
