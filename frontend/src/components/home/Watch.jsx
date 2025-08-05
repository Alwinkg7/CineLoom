import React, { useRef } from "react";
import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";
import Movie from "../../assets/movie.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const languages = [
  "Malayalam",
  "Tamil",
  "English",
  "Hindi",
  "Kannada",
  "Mandarin",
  "Philipinese",
  "Telugu",
  "Bengali",
  "Korean",
  "Assamese",
  "Bhojpuri",
  "Japanese",
];

const Watch = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <Box position="relative" bg="black" p={6} px={10}>
      <Text
        display="flex"
        alignItems="center"
        gap="10px"
        fontWeight="bold"
        fontSize="3xl"
        color="white"
        p={4}
      >
        <Image src={Movie} alt="Movie icon" boxSize="30px" />
        Watch in your Language
      </Text>

      <Box position="relative">
        <Flex align="center">
          {/* Left Arrow */}
          <Button
            onClick={scrollLeft}
            bg="transparent"
            color="white"
            _hover={{ color: "red.500" }}
            mr={2}
            fontSize="xl"
          >
            <FaChevronLeft size={24} />
          </Button>

          {/* Language Buttons Container */}
          <Flex
            ref={scrollContainerRef}
            overflowX="auto"
            gap={4}
            py={2}
            flex="1"
            css={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
            }}
          >
            {languages.map((lang, index) => (
              <Button
                key={index}
                flexShrink={0}
                borderRadius="md"
                bg="#1E1E1E"
                color="white"
                _hover={{ bg: "gray.600" }}
                fontSize="md"
                py={6}
                px={10}
                minW="180px"
                whiteSpace="nowrap"
              >
                {lang}
              </Button>
            ))}
          </Flex>

          {/* Right Arrow */}
          <Button
            onClick={scrollRight}
            bg="transparent"
            color="white"
            _hover={{ color: "red.500" }}
            ml={2}
            fontSize="xl"
          >
            <FaChevronRight size={24} />
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Watch;
