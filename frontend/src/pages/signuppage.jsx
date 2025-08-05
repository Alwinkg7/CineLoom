import React, { useState } from 'react';
import {
  Box,
  Input,
  Button,
  Heading,
  Text,
  FormControl,
  FormLabel,
  VStack,
  useToast
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'

const SignUpPage = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.password) {
      toast({
        title: "Please fill in all fields.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    console.log('Form Data:', formData);
    toast({
      title: "Signed up successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box
      bg="black"
      minH="90vh"
      display="flex"
      mt={15}
      flexDirection="column"
      justifyContent="space-between"
    >
      {/* Center Form */}
      <Box
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={4}
        mt="-20px"
      >
        <Box
          bg="gray.900"
          p={8}
          borderRadius="md"
          boxShadow="lg"
          width="100%"
          maxW="400px"
          color="white"
        >
          <Heading mb={6} textAlign="center" fontSize="2xl">
            Sign Up
          </Heading>

          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                placeholder="Enter your name"
                bg="gray.800"
                borderColor="gray.700"
                _focus={{ borderColor: "#FF0102" }}
                value={formData.name}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                bg="gray.800"
                borderColor="gray.700"
                _focus={{ borderColor: "#FF0102" }}
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                placeholder="Create a password"
                bg="gray.800"
                borderColor="gray.700"
                _focus={{ borderColor: "#FF0102" }}
                value={formData.password}
                onChange={handleChange}
              />
            </FormControl>

            <Button
              bg="#FF0102"
              color="white"
              width="100%"
              _hover={{ bg: '#cc0000' }}
              onClick={handleSubmit}
            >
              Create Account
            </Button>
          </VStack>

          <Text fontSize="sm" mt={4} textAlign="center" color="gray.400">
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#FF0102' }}>Login</Link>
          </Text>
        </Box>
      </Box>


    </Box>
  );
};

export default SignUpPage;
