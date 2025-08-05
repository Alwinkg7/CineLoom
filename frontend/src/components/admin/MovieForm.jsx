import {
    Box,
    Input,
    Textarea,
    Button,
    FormControl,
    FormLabel,
    Select,
    VStack,
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  const MovieForm = ({ onSubmit }) => {
    const [form, setForm] = useState({
      title: "",
      genre: "",
      language: "",
      releaseDate: "",
      cast: "",
      plot: "",
    });
  
    const handleChange = (e) =>
      setForm({ ...form, [e.target.name]: e.target.value });
  
    return (
      <Box p={4}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input name="title" value={form.title} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Genre</FormLabel>
            <Input name="genre" value={form.genre} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Language</FormLabel>
            <Input name="language" value={form.language} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Release Date</FormLabel>
            <Input type="date" name="releaseDate" value={form.releaseDate} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Cast</FormLabel>
            <Input name="cast" value={form.cast} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Plot</FormLabel>
            <Textarea name="plot" value={form.plot} onChange={handleChange} />
          </FormControl>
          <Button colorScheme="blue" onClick={() => onSubmit(form)}>
            Save Movie
          </Button>
        </VStack>
      </Box>
    );
  };
  
  export default MovieForm;
  