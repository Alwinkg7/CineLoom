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
  Image,
  Link,
  Stack,
  Divider,
  Icon,
  useBreakpointValue
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaLaptopCode, FaFilm, FaBullhorn, FaHeadset } from 'react-icons/fa';

const jobOpenings = [
  {
    id: 1,
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Mumbai, India",
    type: "Full-time",
    icon: FaLaptopCode
  },
  {
    id: 2,
    title: "Content Acquisition Manager",
    department: "Content",
    location: "Bangalore, India",
    type: "Full-time",
    icon: FaFilm
  },
  {
    id: 3,
    title: "Growth Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    icon: FaBullhorn
  },
  {
    id: 4,
    title: "Customer Support Lead",
    department: "Operations",
    location: "Delhi, India",
    type: "Full-time",
    icon: FaHeadset
  }
];

const Careers = () => {
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
          Careers at CineLoom
        </Heading>
        
        <Text 
          fontSize="xl" 
          textAlign="center" 
          mb={10} 
          color="gray.300"
          maxW="800px"
        >
          Help shape the future of entertainment
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
                Our Culture
              </Heading>
              <VStack align="start" spacing={6} color="gray.300" lineHeight="tall">
                <Text>
                  At CineLoom, we believe great stories can come from anywhere and be loved everywhere. We're building a culture where amazing people can do their best work.
                </Text>
                <Text>
                  We value curiosity, passion, and diversity of thought. Our team is made up of people from different backgrounds and perspectives who share a common goal: to entertain the world.
                </Text>
                <Text>
                  Whether you're an engineer, content expert, or operations specialist, you'll have the opportunity to make an impact from day one.
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="CineLoom team working together" 
                borderRadius="md"
                objectFit="cover"
                h="100%"
                w="100%"
              />
            </Box>
          </GridItem>
        </Grid>

        <Box w="100%" mb={12}>
          <Heading fontSize="xl" mb={8} color="white" textAlign="center">
            Current Openings
          </Heading>
          
          <VStack spacing={4} w="100%">
            {jobOpenings.map((job) => (
              <Box 
                key={job.id}
                bg="rgba(45,45,45,0.7)" 
                p={6} 
                borderRadius="md"
                w="100%"
                _hover={{ bg: "rgba(65,65,65,0.7)" }}
                transition="background 0.2s"
              >
                <Flex direction={["column", "row"]} justify="space-between" align={["start", "center"]}>
                  <Flex align="center" mb={[4, 0]}>
                    <Icon as={job.icon} boxSize={6} color="red.500" mr={4} />
                    <Box>
                      <Heading fontSize="lg" color="white">{job.title}</Heading>
                      <Text color="gray.400">{job.department}</Text>
                    </Box>
                  </Flex>
                  <Flex direction={["column", "row"]} align={["start", "center"]} gap={[0, 4]}>
                    <Flex align="center" color="gray.400" mb={[2, 0]}>
                      <Icon as={FaMapMarkerAlt} mr={2} />
                      <Text>{job.location}</Text>
                    </Flex>
                    <Text color="gray.400">{job.type}</Text>
                  </Flex>
                </Flex>
              </Box>
            ))}
          </VStack>
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
                Benefits
              </Heading>
              <VStack align="start" spacing={3} color="gray.300">
                <Text>• Competitive salary and equity</Text>
                <Text>• Comprehensive health plans</Text>
                <Text>• Flexible vacation policy</Text>
                <Text>• Parental leave</Text>
                <Text>• Learning stipend</Text>
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
              <Heading fontSize="lg" mb={4} color="white">
                Locations
              </Heading>
              <VStack align="start" spacing={3} color="gray.300">
                <Text>• Mumbai HQ</Text>
                <Text>• Bangalore Office</Text>
                <Text>• Delhi Office</Text>
                <Text>• Remote opportunities</Text>
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
              <Heading fontSize="lg" mb={4} color="white">
                Hiring Process
              </Heading>
              <VStack align="start" spacing={3} color="gray.300">
                <Text>1. Application review</Text>
                <Text>2. Initial screening</Text>
                <Text>3. Skills assessment</Text>
                <Text>4. Team interviews</Text>
                <Text>5. Offer</Text>
              </VStack>
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
            Not seeing the perfect role?
          </Heading>
          <Text color="gray.300" mb={6} lineHeight="tall">
            We're always looking for talented people. Send us your resume and we'll contact you when a matching position opens up.
          </Text>
          <Stack direction={["column", "row"]} spacing={4} justify="center">
            <Button 
              bg="#E50914" 
              color="white" 
              _hover={{ bg: "#F40612" }}
              size={buttonSize}
            >
              Submit Your Resume
            </Button>
            <Button 
              variant="outline" 
              color="red.500" 
              borderColor="red.500"
              _hover={{ bg: "rgba(229, 9, 20, 0.1)" }}
              size={buttonSize}
            >
              Contact Talent Team
            </Button>
          </Stack>
        </Box>
      </Container>
      
    </Flex>
  );
};

export default Careers;