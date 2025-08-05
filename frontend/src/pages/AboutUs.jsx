import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Flex,
  Container,
  Grid,
  GridItem,
  Image,
  Button,
  Link
} from '@chakra-ui/react';

const AboutUs = () => {
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
          mb={[6, 8]} 
          fontSize={["2xl", "3xl", "4xl"]} 
          textAlign="center"
          fontWeight="bold"
          letterSpacing="tight"
        >
          About CineLoom
        </Heading>
        
        <Text 
          fontSize="xl" 
          textAlign="center" 
          mb={10} 
          color="gray.300"
          maxW="800px"
        >
          The story behind your favorite streaming experience
        </Text>

        <Grid 
          templateColumns={["1fr", "1fr", "1fr 1fr"]} 
          gap={8} 
          w="100%"
          mb={12}
          alignItems="center"
        >
          <GridItem>
            <Box 
              bg="rgba(45,45,45,0.7)" 
              p={8} 
              borderRadius="md"
              h="100%"
            >
              <Heading fontSize="xl" mb={6} color="white">
                Our Story
              </Heading>
              <VStack align="start" spacing={6} color="gray.300" lineHeight="tall">
                <Text>
                  Founded in 2020, CineLoom began with a simple idea: to create the most satisfying entertainment experience possible. What started as a small team of film enthusiasts has grown into India's leading streaming service.
                </Text>
                <Text>
                  We've revolutionized how people discover and enjoy movies and TV shows, with personalized recommendations and seamless streaming across all devices.
                </Text>
                <Text>
                  Today, we serve millions of members across 190 countries, delivering stories that inspire, entertain, and bring people together.
                </Text>
              </VStack>
            </Box>
          </GridItem>
          
          <GridItem>
            <Box 
              bg="gray.900" 
              p={2} 
              borderRadius="md"
              overflow="hidden"
            >
              <Image 
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba" 
                alt="CineLoom team watching content" 
                borderRadius="md"
                objectFit="cover"
                h="100%"
                w="100%"
              />
            </Box>
          </GridItem>
        </Grid>

        <Box w="100%" mb={12}>
          <Heading fontSize="xl" mb={6} color="white" textAlign="center">
            Our Mission
          </Heading>
          <Text 
            fontSize="lg" 
            textAlign="center" 
            color="gray.300" 
            maxW="800px" 
            mx="auto"
            lineHeight="tall"
          >
            To entertain the world by offering the most compelling content, personalized for every taste, and accessible on any screen.
          </Text>
        </Box>

        <Grid 
          templateColumns={["1fr", "1fr", "1fr 1fr 1fr"]} 
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
              <Heading fontSize="lg" mb={4} color="white">
                Content
              </Heading>
              <Text color="gray.300" lineHeight="tall">
                Thousands of movies, TV shows, and CineLoom Originals you won't find anywhere else. New titles added every week.
              </Text>
            </Box>
          </GridItem>
          
          <GridItem>
            <Box 
              bg="rgba(45,45,45,0.7)" 
              p={8} 
              borderRadius="md"
              h="100%"
            >
              <Heading fontSize="lg" mb={4} color="white">
                Technology
              </Heading>
              <Text color="gray.300" lineHeight="tall">
                Cutting-edge streaming technology that adapts to your internet speed for the best possible quality without buffering.
              </Text>
            </Box>
          </GridItem>
          
          <GridItem>
            <Box 
              bg="rgba(45,45,45,0.7)" 
              p={8} 
              borderRadius="md"
              h="100%"
            >
              <Heading fontSize="lg" mb={4} color="white">
                Community
              </Heading>
              <Text color="gray.300" lineHeight="tall">
                A passionate community of entertainment lovers sharing recommendations and discovering new favorites together.
              </Text>
            </Box>
          </GridItem>
        </Grid>

        <Box 
          bg="rgba(45,45,45,0.7)" 
          p={8} 
          borderRadius="md"
          w="100%"
          maxW="800px"
          textAlign="center"
        >
          <Heading fontSize="xl" mb={6} color="white">
            Join Our Team
          </Heading>
          <Text color="gray.300" mb={6} lineHeight="tall">
            We're always looking for talented, passionate people to help shape the future of entertainment.
          </Text>
          <Button 
            bg="#E50914" 
            color="white" 
            _hover={{ bg: "#F40612" }}
            as={Link}
            href="/careers"
          >
            View Open Positions
          </Button>
        </Box>
      </Container>
      
    </Flex>
  );
};

export default AboutUs;