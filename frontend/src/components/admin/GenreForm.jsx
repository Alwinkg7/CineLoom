import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    VStack,
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  const GenreForm = ({ onSubmit }) => {
    const [genre, setGenre] = useState("");
  
    return (
      <Box p={4}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>New Genre</FormLabel>
            <Input value={genre} onChange={(e) => setGenre(e.target.value)} />
          </FormControl>
          <Button colorScheme="green" onClick={() => onSubmit(genre)}>
            Add Genre
          </Button>
        </VStack>
      </Box>
    );
  };
  
  export default GenreForm;
  