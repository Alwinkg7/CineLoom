import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    VStack,
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  const FAQForm = ({ onSubmit }) => {
    const [form, setForm] = useState({ question: "", answer: "" });
  
    const handleChange = (e) =>
      setForm({ ...form, [e.target.name]: e.target.value });
  
    return (
      <Box p={4}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Question</FormLabel>
            <Input name="question" value={form.question} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Answer</FormLabel>
            <Textarea name="answer" value={form.answer} onChange={handleChange} />
          </FormControl>
          <Button colorScheme="orange" onClick={() => onSubmit(form)}>
            Add FAQ
          </Button>
        </VStack>
      </Box>
    );
  };
  
  export default FAQForm;
  