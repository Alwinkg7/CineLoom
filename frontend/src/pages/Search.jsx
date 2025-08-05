import React, { useState, useEffect } from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Skeleton,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Badge
} from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';

// Mock data with more details
const mockResults = [
  { 
    id: 1,
    title: 'Thudarum', 
    image: 'src/assets/thudarum.png',
    year: 2025,
    type: 'Crime Thriller',
    rating: '8.2/10'
  },
  { 
    id: 2,
    title: 'Hit 3', 
    image: 'src/assets/hit3.png',
    year: 2025,
    type: 'Action',
    rating: '7.9/10'
  },
  { 
    id: 3,
    title: 'Padakalam', 
    image: 'src/assets/padakalam.png',
    year: 2025,
    type: 'Political Drama',
    rating: '8.5/10'
  },
  { 
    id: 4,
    title: 'Devara', 
    image: 'src/assets/devara.png',
    year: 2025,
    type: 'Action',
    rating: '8.7/10'
  },
  { 
    id: 5,
    title: 'Antman', 
    image: 'src/assets/antman.png',
    year: 2024,
    type: 'Superhero',
    rating: '6.9/10'
  },
  { 
    id: 6,
    title: 'Kerala Crime Files', 
    image: 'src/assets/keralafiles.png',
    year: 2025,
    type: 'Crime Drama',
    rating: '7.5/10'
  },
  { 
    id: 7,
    title: 'Kerala Crime Files', 
    image: 'src/assets/keralafiles.png',
    year: 2025,
    type: 'Crime Drama',
    rating: '7.5/10'
  },
  { 
    id: 8,
    title: 'Kerala Crime Files', 
    image: 'src/assets/keralafiles.png',
    year: 2025,
    type: 'Crime Drama',
    rating: '7.5/10'
  },
  { 
    id: 9,
    title: 'Kerala Crime Files', 
    image: 'src/assets/keralafiles.png',
    year: 2025,
    type: 'Crime Drama',
    rating: '7.5/10'
  },
  { 
    id: 10,
    title: 'Kerala Crime Files', 
    image: 'src/assets/keralafiles.png',
    year: 2025,
    type: 'Crime Drama',
    rating: '7.5/10'
  },

];

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Simulate loading state
  useEffect(() => {
    if (query) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [query]);

  const filteredResults = query 
    ? mockResults.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onOpen();
  };

  const clearSearch = () => {
    setQuery('');
  };

  return (
    <Box bg="black" color="white" minH="100vh" mt={20} display="flex" flexDirection="column">
      
      <Box px={[4, 6, 10]} py={8} maxW="1400px" mx="auto" w="100%">
        <Heading fontSize={["2xl", "3xl", "4xl"]} mb={6} fontWeight="bold">
          Search CineLoom
        </Heading>
        
        <InputGroup size="lg" mb={8}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.400" boxSize={5} />
          </InputLeftElement>
          <Input
            placeholder="Search for movies, TV shows, genres..."
            bg="gray.800"
            borderColor="gray.700"
            _focus={{ borderColor: "red.500" }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            fontSize="lg"
            py={6}
            pr={12}
          />
          {query && (
            <IconButton
              aria-label="Clear search"
              icon={<CloseIcon boxSize={3} />}
              position="absolute"
              right={2}
              top="50%"
              transform="translateY(-50%)"
              size="sm"
              variant="ghost"
              onClick={clearSearch}
            />
          )}
        </InputGroup>

        {query ? (
          isLoading ? (
            <SimpleGrid columns={[2, 3, 4, 5]} spacing={6}>
              {[...Array(12)].map((_, i) => (
                <Skeleton key={i} height="300px" borderRadius="md" />
              ))}
            </SimpleGrid>
          ) : filteredResults.length > 0 ? (
            <>
              <Text fontSize="lg" mb={4} color="gray.300">
                {filteredResults.length} results for "{query}"
              </Text>
              <SimpleGrid columns={[2, 3, 4, 5]} spacing={6}>
                {filteredResults.map((item) => (
                  <Box 
                    key={item.id} 
                    position="relative" 
                    cursor="pointer"
                    onClick={() => handleItemClick(item)}
                    _hover={{ transform: "scale(1.03)" }}
                    transition="transform 0.2s"
                  >
                    <Image 
                      src={item.image} 
                      borderRadius="md" 
                      objectFit="cover"
                      w="100%"
                      h="300px"
                      fallbackSrc="https://via.placeholder.com/300x450/1a1a1a/FFFFFF?text=Loading"
                    />
                    <Box position="absolute" bottom={0} left={0} right={0} p={3} bg="linear-gradient(to top, rgba(0,0,0,0.8), transparent)">
                      <Text fontWeight="semibold">{item.title}</Text>
                      <Text fontSize="sm" color="gray.300">{item.year}</Text>
                    </Box>
                  </Box>
                ))}
              </SimpleGrid>
            </>
          ) : (
            <VStack spacing={4} py={10} textAlign="center">
              <Text fontSize="xl">No results found for "{query}"</Text>
              <Text color="gray.400">Try different keywords or check the spelling</Text>
            </VStack>
          )
        ) : (
          <VStack spacing={6} py={10}>
            <Text fontSize="xl" color="gray.400">
              Search for your favorite movies and TV shows
            </Text>
            <SimpleGrid columns={[2, 3, 4, 5]} spacing={6} w="100%">
              {mockResults.map((item) => (
                <Box 
                  key={item.id}
                  position="relative"
                  cursor="pointer"
                  onClick={() => handleItemClick(item)}
                  _hover={{ transform: "scale(1.03)" }}
                  transition="transform 0.2s"
                >
                  <Image 
                    src={item.image} 
                    borderRadius="md" 
                    objectFit="cover"
                    w="100%"
                    h="300px"
                  />
                  <Box position="absolute" bottom={0} left={0} right={0} p={3} bg="linear-gradient(to top, rgba(0,0,0,0.8), transparent)">
                    <Text fontWeight="semibold">{item.title}</Text>
                    <Text fontSize="sm" color="gray.300">{item.year}</Text>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        )}
      </Box>

      {/* Detail Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bg="gray.900" color="white">
          <ModalHeader>
            {selectedItem?.title}
            <Badge ml={3} colorScheme="red">{selectedItem?.rating}</Badge>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {selectedItem && (
              <Flex direction={["column", "row"]} gap={6}>
                <Image 
                  src={selectedItem.image} 
                  borderRadius="md" 
                  w={["100%", "200px"]}
                  h="300px"
                  objectFit="cover"
                />
                <Box>
                  <Text mb={2}><strong>Year:</strong> {selectedItem.year}</Text>
                  <Text mb={2}><strong>Genre:</strong> {selectedItem.type}</Text>
                  <Text mb={4}><strong>Rating:</strong> {selectedItem.rating}</Text>
                  <Button 
                    colorScheme="red" 
                    size="lg" 
                    w="100%"
                    onClick={() => {
                      // Handle play action
                      onClose();
                    }}
                  >
                    Play Now
                  </Button>
                </Box>
              </Flex>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

    </Box>
  );
};

export default SearchPage;