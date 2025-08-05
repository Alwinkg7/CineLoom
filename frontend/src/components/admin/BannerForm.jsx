import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    VStack,
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  const BannerForm = ({ onSubmit }) => {
    const [image, setImage] = useState("");
  
    return (
      <Box p={4}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Banner Image URL</FormLabel>
            <Input value={image} onChange={(e) => setImage(e.target.value)} />
          </FormControl>
          <Button colorScheme="teal" onClick={() => onSubmit(image)}>
            Upload Banner
          </Button>
        </VStack>
      </Box>
    );
  };
  
  export default BannerForm;
  