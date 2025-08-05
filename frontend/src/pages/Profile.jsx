// src/pages/ProfilePage.jsx
import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  Avatar,
  Divider
} from '@chakra-ui/react';

const ProfilePage = () => {
  return (
    <Box bg="black" color="white" minH="100vh" display="flex" flexDirection="column">
      <Box py={10} px={6} textAlign="center">
        <Heading mb={2}>Profile</Heading>
        <Text color="gray.400">Manage your CineLoom account</Text>
      </Box>

      <VStack spacing={6} align="center" mb={12}>
        <Avatar size="xl" name="User Name" />
        <Box textAlign="center">
          <Text fontSize="lg" fontWeight="bold">User Name</Text>
          <Text color="gray.500">user@example.com</Text>
        </Box>

        <Divider borderColor="gray.700" w="80%" />

        <Box textAlign="center">
          <Text fontSize="md" fontWeight="semibold" mb={2}>Current Plan</Text>
          <Text color="#FF0102" fontWeight="bold">Premium - ₹799/month</Text>
        </Box>

        <Button
          bg="#FF0102"
          color="white"
          _hover={{ bg: '#cc0000' }}
          width="200px"
        >
          Manage Subscription
        </Button>
      </VStack>
    </Box>
  );
};

export default ProfilePage;
