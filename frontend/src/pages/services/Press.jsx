import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  Flex,
  Container,
  Grid,
  GridItem,
  Link,
  Stack,
  Divider,
  Image,
  Input,
  useBreakpointValue
} from '@chakra-ui/react';

const pressReleases = [
  {
    id: 1,
    title: "CineLoom Announces Record Subscriber Growth in 2024",
    date: "March 15, 2024",
    summary: "Streaming platform reaches 10 million subscribers worldwide, marking 200% year-over-year growth.",
    link: "#"
  },
  {
    id: 2,
    title: "CineLoom Launches 10 New Original Series",
    date: "February 28, 2024",
    summary: "The streaming service expands its original content slate with productions from India, Korea, and the US.",
    link: "#"
  },
  {
    id: 3,
    title: "CineLoom Partners with Major Studios for Exclusive Content",
    date: "January 10, 2024",
    summary: "New licensing deals bring thousands of additional titles to the platform starting next quarter.",
    link: "#"
  }
];

const mediaCoverage = [
  {
    id: 1,
    source: "Entertainment Today",
    title: "How CineLoom is Changing the Streaming Landscape",
    date: "April 5, 2024",
    link: "#"
  },
  {
    id: 2,
    source: "Tech Chronicles",
    title: "CineLoom's AI Recommendation Engine Sets New Standard",
    date: "March 22, 2024",
    link: "#"
  },
  {
    id: 3,
    source: "Business Insights",
    title: "CineLoom's Market Strategy Pays Off in Competitive Streaming Wars",
    date: "March 1, 2024",
    link: "#"
  }
];

const Press = () => {
  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });

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
          Press Center
        </Heading>
        
        <Text 
          fontSize="xl" 
          textAlign="center" 
          mb={10} 
          color="gray.300"
          maxW="800px"
        >
          Media resources, press releases, and company information
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
                Press Resources
              </Heading>
              <VStack align="start" spacing={6} color="gray.300" lineHeight="tall">
                <Text>
                  Download our media kit containing company facts, executive bios, high-resolution logos, and brand guidelines.
                </Text>
                <Button 
                  bg="#E50914" 
                  color="white" 
                  _hover={{ bg: "#F40612" }}
                  size={buttonSize}
                  w="100%"
                >
                  Download Media Kit (ZIP)
                </Button>
                <Divider borderColor="gray.600" />
                <Text>
                  For interview requests or media inquiries, please contact our press team:
                </Text>
                <Text fontWeight="medium">
                  Email: <Link color="red.500" href="mailto:press@cineloom.com">press@cineloom.com</Link>
                </Text>
                <Text fontWeight="medium">
                  Phone: +91 22 1234 5678
                </Text>
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
              <Heading fontSize="xl" mb={6} color="white">
                Fast Facts
              </Heading>
              <VStack align="start" spacing={4} color="gray.300">
                <Text><strong>Founded:</strong> 2020</Text>
                <Text><strong>Headquarters:</strong> Mumbai, India</Text>
                <Text><strong>Subscribers:</strong> 10M+ worldwide</Text>
                <Text><strong>Content Library:</strong> 15,000+ titles</Text>
                <Text><strong>Original Content:</strong> 50+ series and films</Text>
                <Text><strong>Available In:</strong> 190 countries</Text>
                <Text><strong>Languages:</strong> 20+ supported</Text>
              </VStack>
            </Box>
          </GridItem>
        </Grid>

        <Box w="100%" mb={12}>
          <Heading fontSize="xl" mb={8} color="white">
            Press Releases
          </Heading>
          
          <VStack spacing={6} w="100%">
            {pressReleases.map((release) => (
              <Box 
                key={release.id}
                bg="rgba(45,45,45,0.7)" 
                p={6} 
                borderRadius="md"
                w="100%"
                _hover={{ bg: "rgba(65,65,65,0.7)" }}
                transition="background 0.2s"
              >
                <Link href={release.link} _hover={{ textDecoration: "none" }}>
                  <Text color="gray.400" mb={2}>{release.date}</Text>
                  <Heading fontSize="lg" color="white" mb={2}>{release.title}</Heading>
                  <Text color="gray.300">{release.summary}</Text>
                </Link>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box w="100%" mb={12}>
          <Heading fontSize="xl" mb={8} color="white">
            Media Coverage
          </Heading>
          
          <VStack spacing={6} w="100%">
            {mediaCoverage.map((article) => (
              <Box 
                key={article.id}
                bg="rgba(45,45,45,0.7)" 
                p={6} 
                borderRadius="md"
                w="100%"
                _hover={{ bg: "rgba(65,65,65,0.7)" }}
                transition="background 0.2s"
              >
                <Link href={article.link} _hover={{ textDecoration: "none" }}>
                  <Text color="red.500" fontWeight="medium" mb={1}>{article.source}</Text>
                  <Heading fontSize="lg" color="white" mb={2}>{article.title}</Heading>
                  <Text color="gray.400">{article.date}</Text>
                </Link>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box 
          bg="rgba(45,45,45,0.7)" 
          p={8} 
          borderRadius="md"
          w="100%"
          maxW="800px"
          textAlign="center"
        >
          <Heading fontSize="xl" mb={6} color="white">
            Stay Updated
          </Heading>
          <Text color="gray.300" mb={6} lineHeight="tall">
            Subscribe to receive CineLoom press releases and announcements directly to your inbox.
          </Text>
          <Stack direction={["column", "row"]} spacing={4} justify="center">
            <Input 
              placeholder="Your email address" 
              bg="gray.800" 
              border="none"
              _focus={{ borderColor: "red.500" }}
              maxW="400px"
            />
            <Button 
              bg="#E50914" 
              color="white" 
              _hover={{ bg: "#F40612" }}
              size={buttonSize}
            >
              Subscribe
            </Button>
          </Stack>
        </Box>
      </Container>
      
    </Flex>
  );
};

export default Press;