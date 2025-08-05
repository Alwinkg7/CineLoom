import {
  Box,
  Text,
  Flex,
  Spinner,
  IconButton,
  useToast,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const WatchMovie = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const videoRef = useRef(null);
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const toast = useToast();

  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/movies/${id}`)
        .then((res) => {
          setMovie(res.data);
          setLoading(false);
        })
        .catch(() => {
          toast({
            title: "Movie not found",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          navigate("/");
        });
    }
  }, [id]);

  const handleTimeUpdate = () => {
    localStorage.setItem(`progress_${id}`, videoRef.current.currentTime);
  };

  useEffect(() => {
    const saved = localStorage.getItem(`progress_${id}`);
    if (saved && videoRef.current) {
      videoRef.current.currentTime = parseFloat(saved);
    }
  }, [movie]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        togglePlay();
      }
      if (e.code === "KeyM") toggleMute();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  });

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) video.requestFullscreen();
  };

  if (loading)
    return (
      <Flex justify="center" align="center" minH="80vh">
        <Spinner size="xl" color="teal.300" />
      </Flex>
    );

  return (
    <Box bg="black" minH="100vh" color="white" px={[2, 4]} py={6}>
      <Text fontSize="3xl" fontWeight="bold" mb={2}>
        {movie.title}
      </Text>
      <Text fontSize="sm" color="gray.400" mb={4}>
        {movie.genre} | {movie.language} | {movie.releaseYear} | Cast:{" "}
        {movie.cast?.join(", ")}
      </Text>

      {/* Video Player */}
      <Box
        position="relative"
        w="100%"
        maxW="100%"
        borderRadius="lg"
        overflow="hidden"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <video
          ref={videoRef}
          src={movie.videoUrl}
          autoPlay
          muted={isMuted}
          controls={false}
          onTimeUpdate={handleTimeUpdate}
          style={{ width: "100%", height: "auto", borderRadius: "10px" }}
        />

        {/* Custom Controls */}
        {showControls && (
          <Flex
            position="absolute"
            bottom="4"
            left="4"
            right="4"
            justify="space-between"
            align="center"
            bg="rgba(0,0,0,0.6)"
            borderRadius="md"
            p={2}
            transition="all 0.2s ease"
          >
            <Flex gap={2}>
              <IconButton
                icon={isPlaying ? <FaPause /> : <FaPlay />}
                onClick={togglePlay}
                aria-label="Play/Pause"
              />
              <IconButton
                icon={isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                onClick={toggleMute}
                aria-label="Mute/Unmute"
              />
            </Flex>
            <IconButton
              icon={<FaExpand />}
              onClick={handleFullscreen}
              aria-label="Fullscreen"
            />
          </Flex>
        )}
      </Box>

      {/* Plot */}
      <Box mt={6}>
        <Text fontSize="lg" fontWeight="medium">
          📝 Plot
        </Text>
        <Text color="gray.300" fontSize="md" mt={1}>
          {movie.plot}
        </Text>
      </Box>

      {/* Recommendations */}
      <Box mt={10}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          🎞️ Recommended for You
        </Text>
        <Flex gap={4} wrap="wrap">
          {(movie.recommendations || []).map((rec) => (
            <Box
              key={rec._id}
              w="160px"
              h="240px"
              bg="gray.700"
              borderRadius="lg"
              overflow="hidden"
              cursor="pointer"
              onClick={() => navigate(`/watch/${rec._id}`)}
              _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
            >
              <Box
                as="img"
                src={rec.posterUrl}
                alt={rec.title}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default WatchMovie;
