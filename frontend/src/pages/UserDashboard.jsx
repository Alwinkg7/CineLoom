import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Stack,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const UserDashboard = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();
  const toast = useToast();

  const [currentlyWatching, setCurrentlyWatching] = useState([
    { id: 1, title: "Inception" },
    { id: 2, title: "Interstellar" },
  ]);

  const [continueWatching, setContinueWatching] = useState([
    { id: 3, title: "The Batman", progress: "45%" },
  ]);

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out.",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
    navigate("/login");
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return (
    <Box p={6}>
      <Heading size="lg" mb={4}>
        Welcome, {user?.username || "User"}
      </Heading>

      <Divider my={4} />

      {/* Currently Watching */}
      <Box mb={6}>
        <Heading size="md" mb={2}>
          🎬 Currently Watching
        </Heading>
        {currentlyWatching.length ? (
          <Stack spacing={2}>
            {currentlyWatching.map((movie) => (
              <Text key={movie.id}>• {movie.title}</Text>
            ))}
          </Stack>
        ) : (
          <Text>No movies currently being watched.</Text>
        )}
      </Box>

      {/* Continue Watching */}
      <Box mb={6}>
        <Heading size="md" mb={2}>
          ⏯️ Continue Watching
        </Heading>
        {continueWatching.length ? (
          <Stack spacing={2}>
            {continueWatching.map((movie) => (
              <Text key={movie.id}>
                • {movie.title} – Progress: {movie.progress}
              </Text>
            ))}
          </Stack>
        ) : (
          <Text>No paused movies to continue.</Text>
        )}
      </Box>

      {/* Subscription Status */}
      <Box mb={6}>
        <Heading size="md" mb={2}>
          📄 Subscription Status
        </Heading>
        <Text>
          {user?.subscription
            ? `Active – ${user.subscription.plan} Plan`
            : "No active subscription."}
        </Text>
      </Box>

      {/* Profile & Logout */}
      <Flex gap={4}>
        <Button colorScheme="teal" onClick={() => navigate("/profile")}>
          Go to Profile
        </Button>
        <Button colorScheme="red" onClick={handleLogout}>
          Logout
        </Button>
      </Flex>
    </Box>
  );
};

export default UserDashboard;
