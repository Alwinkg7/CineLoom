import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    VStack,
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  const LanguageForm = ({ onSubmit }) => {
    const [language, setLanguage] = useState("");
  
    return (
      <Box p={4}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>New Language</FormLabel>
            <Input
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="purple" onClick={() => onSubmit(language)}>
            Add Language
          </Button>
        </VStack>
      </Box>
    );
  };
  
  export default LanguageForm;
  