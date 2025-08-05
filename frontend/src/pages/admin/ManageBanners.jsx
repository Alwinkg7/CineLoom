import { Box, Heading, Button } from "@chakra-ui/react";

const ManageBanners = () => {
  return (
    <Box>
      <Heading mb="4">Manage Banners</Heading>
      <Button colorScheme="teal">Add New Banner</Button>
      {/* Upload banner images, edit existing */}
    </Box>
  );
};

export default ManageBanners;