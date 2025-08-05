import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Input,
  Textarea,
  Button,
  useToast,
  Flex,
  Container,
  Grid,
  GridItem,
  Link,
  Icon,
  FormControl,
  FormLabel
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaTwitter, FaFacebook } from 'react-icons/fa';

const ContactUs = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Please fill in all required fields',
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position: 'top'
      });
      return;
    }

    // Here you would send the data to your backend
    console.log('Contact Form Submitted:', formData);

    toast({
      title: 'Message received!',
      description: 'We will get back to you within 24 hours.',
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top'
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Flex 
      direction="column" 
      minH="100vh" 
      bg="black" 
      color="white"
    >
      
      
      <Container 
        maxW="1200px" 
        px={[4, 6, 8]} 
        py={[8, 12, 16]}
        centerContent
      >
        <Heading 
          mb={[4, 6]} 
          fontSize={["2xl", "3xl", "4xl"]} 
          textAlign="center"
          fontWeight="bold"
          letterSpacing="tight"
        >
          Contact CineLoom Support
        </Heading>
        
        <Text 
          fontSize="xl" 
          textAlign="center" 
          mb={10} 
          color="gray.300"
          maxW="800px"
        >
          Have questions or need assistance? We're here to help 24/7.
        </Text>

        <Grid 
          templateColumns={["1fr", "1fr", "1fr 1fr"]} 
          gap={8} 
          w="100%"
          mb={12}
        >
          <GridItem>
            <Box 
              bg="rgba(45,45,45,0.7)" 
              p={8} 
              borderRadius="md"
              h="100%"
            >
              <Heading fontSize="xl" mb={6} color="white">
                Contact Information
              </Heading>
              
              <VStack align="start" spacing={6}>
                <Flex align="center">
                  <Icon as={FaPhone} color="red.500" mr={4} boxSize={5} />
                  <Box>
                    <Text fontWeight="semibold">Call Us</Text>
                    <Text color="gray.300">+91-800-123-4567</Text>
                    <Text fontSize="sm" color="gray.400">24/7 customer support</Text>
                  </Box>
                </Flex>
                
                <Flex align="center">
                  <Icon as={FaEnvelope} color="red.500" mr={4} boxSize={5} />
                  <Box>
                    <Text fontWeight="semibold">Email Us</Text>
                    <Link color="red.500" href="mailto:support@cineloom.com">support@cineloom.com</Link>
                    <Text fontSize="sm" color="gray.400">Typically respond within 24 hours</Text>
                  </Box>
                </Flex>
                
                <Flex align="center">
                  <Icon as={FaTwitter} color="red.500" mr={4} boxSize={5} />
                  <Box>
                    <Text fontWeight="semibold">Tweet Us</Text>
                    <Link color="red.500" href="https://twitter.com/cineloom">@CineLoomSupport</Link>
                    <Text fontSize="sm" color="gray.400">Fast responses during business hours</Text>
                  </Box>
                </Flex>
              </VStack>
            </Box>
          </GridItem>
          
          <GridItem>
            <Box 
              as="form"
              onSubmit={handleSubmit}
              bg="rgba(45,45,45,0.7)" 
              p={8} 
              borderRadius="md"
            >
              <Heading fontSize="xl" mb={6} color="white">
                Send Us a Message
              </Heading>
              
              <VStack spacing={6}>
                <FormControl>
                  <FormLabel>Full Name *</FormLabel>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    bg="gray.800"
                    border="none"
                    _focus={{ borderColor: "red.500" }}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                
                <FormControl>
                  <FormLabel>Email Address *</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    bg="gray.800"
                    border="none"
                    _focus={{ borderColor: "red.500" }}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                
                <FormControl>
                  <FormLabel>Subject</FormLabel>
                  <Input
                    name="subject"
                    placeholder="What's this about?"
                    bg="gray.800"
                    border="none"
                    _focus={{ borderColor: "red.500" }}
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </FormControl>
                
                <FormControl>
                  <FormLabel>Message *</FormLabel>
                  <Textarea
                    name="message"
                    placeholder="How can we help you?"
                    bg="gray.800"
                    border="none"
                    _focus={{ borderColor: "red.500" }}
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                
                <Button
                  type="submit"
                  bg="#E50914"
                  color="white"
                  _hover={{ bg: "#F40612" }}
                  size="lg"
                  w="100%"
                  mt={4}
                >
                  Send Message
                </Button>
              </VStack>
            </Box>
          </GridItem>
        </Grid>

        <Box w="100%" maxW="800px" textAlign="center" mt={8}>
          <Text fontSize="lg" mb={4}>
            Visit our <Link color="red.500" href="/help-center">Help Center</Link> for quick answers to common questions.
          </Text>
          <Text fontSize="sm" color="gray.400">
            By contacting us, you agree to our <Link color="red.500" href="/privacy">Privacy Policy</Link> and <Link color="red.500" href="/terms">Terms of Service</Link>.
          </Text>
        </Box>
      </Container>
      
    </Flex>
  );
};

export default ContactUs;