// src/pages/admin/ManageMovies.jsx
import { Box, Heading, Button } from "@chakra-ui/react";

const ManageMovies = () => {
  return (
    <Box>
      <Heading mb="4">Manage Movies</Heading>
      <Button colorScheme="teal">Add New Movie</Button>
      {/* List, Edit, Delete movie UI goes here */}
    </Box>
  );
};

export default ManageMovies;