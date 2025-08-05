import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  Flex,
  Container,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Grid,
  GridItem
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'

const HelpCenter = () => {
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
          mb={[6, 8, 10]} 
          fontSize={["2xl", "3xl", "4xl"]} 
          textAlign="center"
          fontWeight="bold"
          letterSpacing="tight"
        >
          CineLoom Help Center
        </Heading>
        
        <Text 
          fontSize="xl" 
          textAlign="center" 
          mb={10} 
          color="gray.300"
          maxW="800px"
        >
          Get help with your account, find answers to frequently asked questions, and contact our customer support team.
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
              <Heading fontSize="xl" mb={4} color="white">
                Account Help
              </Heading>
              <VStack align="start" spacing={4}>
                <Link href="#" color="red.500">Forgot password</Link>
                <Link href="#" color="red.500">Update payment method</Link>
                <Link href="#" color="red.500">Change subscription plan</Link>
                <Link href="#" color="red.500">Update email address</Link>
              </VStack>
            </Box>
          </GridItem>
          
          <GridItem>
            <Box 
              bg="rgba(45,45,45,0.7)" 
              p={8} 
              borderRadius="md"
              h="100%"
            >
              <Heading fontSize="xl" mb={4} color="white">
                Troubleshooting
              </Heading>
              <VStack align="start" spacing={4}>
                <Link href="#" color="red.500">Can't sign in</Link>
                <Link href="#" color="red.500">Video playback issues</Link>
                <Link href="#" color="red.500">App not working</Link>
                <Link href="#" color="red.500">Sound problems</Link>
              </VStack>
            </Box>
          </GridItem>
        </Grid>

        <Box w="100%" maxW="800px">
          <Heading fontSize="2xl" mb={6} color="white">
            Frequently Asked Questions
          </Heading>
          
          <VStack spacing={6} align="start" mb={12}>
            <Box>
              <Heading as="h3" fontSize="lg" mb={2} color="white">
                How do I reset my password?
              </Heading>
              <Text color="gray.300">
                Go to the CineLoom login page and select "Forgot password". Enter the email address associated with your account. You'll receive an email with instructions to reset your password. If you don't see the email, check your spam folder.
              </Text>
            </Box>
            
            <Box>
              <Heading as="h3" fontSize="lg" mb={2} color="white">
                How can I change my subscription plan?
              </Heading>
              <Text color="gray.300">
                You can upgrade or downgrade your plan anytime. Sign in to your account, go to "Account Settings", then select "Change Plan". Your new plan will take effect at your next billing date.
              </Text>
            </Box>
            
            <Box>
              <Heading as="h3" fontSize="lg" mb={2} color="white">
                Why am I being charged?
              </Heading>
              <Text color="gray.300">
                CineLoom automatically renews your subscription at the end of each billing period. You can view your billing history and upcoming charges in the "Billing Details" section of your account.
              </Text>
            </Box>
          </VStack>

          <Box 
            bg="rgba(45,45,45,0.7)" 
            p={8} 
            borderRadius="md"
            mb={8}
          >
            <Heading fontSize="xl" mb={6} color="white">
              Contact Customer Support
            </Heading>
            
            <FormControl mb={4}>
              <FormLabel>Email address</FormLabel>
              <Input 
                type="email" 
                bg="gray.800" 
                border="none"
                _focus={{ borderColor: "red.500" }}
              />
            </FormControl>
            
            <FormControl mb={4}>
              <FormLabel>Subject</FormLabel>
              <Input 
                type="text" 
                bg="gray.800" 
                border="none"
                _focus={{ borderColor: "red.500" }}
              />
            </FormControl>
            
            <FormControl mb={6}>
              <FormLabel>Message</FormLabel>
              <Textarea 
                bg="gray.800" 
                border="none"
                _focus={{ borderColor: "red.500" }}
                rows={5}
              />
            </FormControl>
            
            <Button 
              bg="#E50914" 
              _hover={{ bg: "#F40612" }}
              size="lg"
              w="100%"
            >
              Send Message
            </Button>
          </Box>

          <Box textAlign="center">
            <Text fontSize="lg" mb={2}>
              Prefer to call us?
            </Text>
            <Text fontSize="xl" color="red.500" fontWeight="bold">
              +91-800-123-4567
            </Text>
            <Text fontSize="sm" color="gray.400" mt={2}>
              24/7 customer support
            </Text>
          </Box>
        </Box>
      </Container>
      
    </Flex>
  );
};

export default HelpCenter;