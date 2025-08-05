// src/pages/SettingsPage.jsx
import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  useToast,
  VStack
} from '@chakra-ui/react';

const SettingsPage = () => {
  const toast = useToast();
  const [settings, setSettings] = useState({
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    language: 'English',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    toast({
      title: 'Settings saved!',
      status: 'success',
      duration: 3000,
      isClosable: true
    });
  };

  return (
    <Box bg="black" minH="100vh" color="white" display="flex" flexDirection="column" pt={10}>
      <Box px={6} py={10} flex="1">
        <Heading mb={6}>Account Settings</Heading>
        <VStack spacing={5} maxW="400px">
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              name="username"
              value={settings.username}
              onChange={handleChange}
              bg="gray.800"
              borderColor="gray.700"
              _focus={{ borderColor: "#FF0102" }}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              bg="gray.800"
              borderColor="gray.700"
              _focus={{ borderColor: "#FF0102" }}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Preferred Language</FormLabel>
            <Select
              name="language"
              value={settings.language}
              onChange={handleChange}
              bg="gray.800"
              borderColor="gray.700"
              _focus={{ borderColor: "#FF0102" }}
            >
              <option style={{ color: 'black' }}>English</option>
              <option style={{ color: 'black' }}>Malayalam</option>
              <option style={{ color: 'black' }}>Hindi</option>
              <option style={{ color: 'black' }}>Tamil</option>
            </Select>
          </FormControl>

          <Button
            width="full"
            mt={4}
            bg="#FF0102"
            color="white"
            _hover={{ bg: "#cc0000" }}
            onClick={handleSave}
          >
            Save Settings
          </Button>
        </VStack>
      </Box>

    </Box>
  );
};

export default SettingsPage;
