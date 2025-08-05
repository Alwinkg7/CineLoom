import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Flex,
  Container,
  Link,
  Divider,
  useBreakpointValue
} from '@chakra-ui/react';

const Terms = () => {
  const headingSize = useBreakpointValue({ base: "xl", md: "2xl", lg: "3xl" });
  const textSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Flex 
      direction="column" 
      minH="100vh" 
      bg="black" 
      color="white"
    >
      
      <Container 
        maxW="1200px" 
        px={[4, 6, 8]} 
        py={[8, 12, 16]}
        centerContent
      >
        <Heading 
          mb={[6, 8]} 
          fontSize={headingSize}
          fontWeight="bold"
          letterSpacing="tight"
          textAlign="center"
        >
          Terms of Use
        </Heading>
        
        <Text 
          fontSize={textSize} 
          color="gray.300" 
          mb={10} 
          textAlign="center"
          maxW="800px"
        >
          Last Updated: June 15, 2024
        </Text>

        <Box 
          bg="rgba(45,45,45,0.7)" 
          p={[6, 8]} 
          borderRadius="md"
          w="100%"
        >
          <VStack align="start" spacing={6} color="gray.300" lineHeight="tall">
            <Text fontSize={textSize}>
              Welcome to CineLoom! These Terms of Use govern your use of our streaming service and related offerings.
            </Text>

            <Heading fontSize="xl" color="white" mt={4}>
              1. Acceptance of Terms
            </Heading>
            <Text fontSize={textSize}>
              By accessing or using CineLoom, you agree to be bound by these Terms. If you don't agree, you may not use our services. We may modify these Terms at any time, with changes effective upon posting.
            </Text>

            <Heading fontSize="xl" color="white" mt={4}>
              2. Service Description
            </Heading>
            <Text fontSize={textSize}>
              CineLoom provides a subscription-based streaming service offering movies, TV shows, and other content. Content availability may vary by region and change over time.
            </Text>

            <Heading fontSize="xl" color="white" mt={4}>
              3. Account Registration
            </Heading>
            <Text fontSize={textSize}>
              You must provide accurate registration information and keep it updated. You're responsible for all activities under your account. Accounts are non-transferable.
            </Text>

            <Heading fontSize="xl" color="white" mt={4}>
              4. Subscription and Billing
            </Heading>
            <Text fontSize={textSize}>
              By subscribing, you authorize recurring payments. We may change subscription fees with 30 days notice. Cancel anytime before your next billing cycle to avoid future charges.
            </Text>

            <Heading fontSize="xl" color="white" mt={4}>
              5. User Conduct
            </Heading>
            <Text fontSize={textSize}>
              You agree not to: (a) share your account credentials; (b) attempt to circumvent content protections; (c) use our service for commercial purposes; or (d) violate any applicable laws.
            </Text>

            <Heading fontSize="xl" color="white" mt={4}>
              6. Intellectual Property
            </Heading>
            <Text fontSize={textSize}>
              All content is owned by CineLoom or our licensors and protected by copyright laws. You may only stream content for personal, non-commercial use as intended through our service.
            </Text>

            <Heading fontSize="xl" color="white" mt={4}>
              7. Termination
            </Heading>
            <Text fontSize={textSize}>
              We may terminate or suspend your account for violations of these Terms. You may terminate by canceling your subscription through your account settings.
            </Text>

            <Heading fontSize="xl" color="white" mt={4}>
              8. Disclaimers
            </Heading>
            <Text fontSize={textSize}>
              Our service is provided "as is" without warranties of any kind. We don't guarantee uninterrupted or error-free service or that all content will be available at all times.
            </Text>

            <Heading fontSize="xl" color="white" mt={4}>
              9. Limitation of Liability
            </Heading>
            <Text fontSize={textSize}>
              CineLoom won't be liable for any indirect, incidental, or consequential damages arising from your use of our service.
            </Text>

            <Heading fontSize="xl" color="white" mt={4}>
              10. Governing Law
            </Heading>
            <Text fontSize={textSize}>
              These Terms are governed by Indian law. Any disputes will be resolved in Mumbai courts.
            </Text>

            <Divider borderColor="gray.600" my={6} />

            <Text fontSize={textSize}>
              For questions about these Terms, contact us at <Link color="red.500" href="mailto:legal@cineloom.com">legal@cineloom.com</Link>.
            </Text>
            <Text fontSize={textSize}>
              Please also review our <Link color="red.500" href="/privacy">Privacy Policy</Link> and <Link color="red.500" href="/cookies">Cookies Policy</Link>.
            </Text>
          </VStack>
        </Box>
      </Container>
      
    </Flex>
  );
};

export default Terms;