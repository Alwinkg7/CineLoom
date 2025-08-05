import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Cookies = () => {
  return (
    <Box
      bg="black"
      minH="100vh"
      color="white"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box py={10} px={[4, 8, 16]}>

        <Heading mb={4} fontSize="2xl">
          Cookies Policy
        </Heading>
        <VStack align="start" spacing={4}>
          <Text color="gray.300">
            We use cookies and similar technologies to provide and improve our services, understand how you use our platform, and to personalize content and ads.
          </Text>
          <Text color="gray.300">
            Cookies are small data files that are stored on your device. You can control how cookies are used through your browser settings.
          </Text>
          <Text color="gray.300">
            By using CineLoom, you agree to our use of cookies in accordance with this policy. For more information about our privacy practices, please see our Privacy Policy.
          </Text>
        </VStack>
      </Box>


    </Box>
  );
};

export default Cookies;
