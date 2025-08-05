// src/components/CategoryRow.jsx
import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';
import Thudarum from '../../assets/thudarum.png';

const CategoryRow = ({ title }) => {
  return (
    <Box px={6}>
      <Text fontSize="xl" fontWeight="bold">{title}</Text>
      <Flex gap={4} overflowX="scroll">
        {[...Array(8)].map((_, i) => (
          <Image
            key={i}
            src={Thudarum}
            alt="Movie Poster"
            borderRadius="md"
            boxSize="160px"
            objectFit="cover"
          />
        ))}
      </Flex>
    </Box>
  );
};

export default CategoryRow;
