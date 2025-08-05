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
import { Link } from 'react-router-dom'; // ✅ Import Link

const LoginPage = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.password) {
      toast({
        title: "Please fill in all fields.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    console.log('Login Data:', formData);
    toast({
      title: "Login successful!",
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
            Login
          </Heading>

          <VStack spacing={4}>
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
                placeholder="Enter your password"
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
              Login
            </Button>
          </VStack>

          <Text fontSize="sm" mt={4} textAlign="center" color="gray.400">
            Don’t have an account?{' '}
            <Link to="/signup" style={{ color: '#FF0102' }}>Sign Up</Link>
          </Text>
        </Box>
      </Box>


    </Box>
  );
};

export default LoginPage;
