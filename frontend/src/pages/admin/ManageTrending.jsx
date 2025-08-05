// src/pages/admin/ManageTrending.jsx
import { Box, Heading, Button } from "@chakra-ui/react";

const ManageTrending = () => {
  return (
    <Box>
      <Heading mb="4">Trending Section</Heading>
      <Button colorScheme="teal">Add Trending Movie</Button>
      {/* List/edit trending movies */}
    </Box>
  );
};

export default ManageTrending;