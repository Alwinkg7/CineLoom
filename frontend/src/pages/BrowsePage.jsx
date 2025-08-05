// src/pages/BrowsePage.jsx
import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import CategoryRow from '../components/Browse/CategoryRow';

const BrowsePage = () => {
  const categories = [
    'Trending Now',
    'Top Rated',
    'Action Movies',
    'Comedy Movies',
    'Horror Movies',
    'Romantic Movies',
    'Documentaries'
  ];

  return (
    <Box bg="black" color="white" minH="100vh" pt={10}>
      <Heading textAlign="center" mb={6}>Browse All</Heading>

      {categories.map((category, index) => (
        <CategoryRow key={index} title={category} />
      ))}

    </Box>
  );
};

export default BrowsePage;
