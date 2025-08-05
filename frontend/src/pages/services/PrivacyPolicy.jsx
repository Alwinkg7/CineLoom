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
  Grid,
  GridItem
} from '@chakra-ui/react';

const PrivacyPolicy = () => {
  return (
    <Flex 
      direction="column" 
      minH="100vh" 
      bg="black" 
      color="white"
    >
      
      <Container 
        maxW="1200px" 
        px={12} 
        py={16}
        centerContent
      >
        <Box textAlign="center" mb={12}>
          <Heading 
            fontSize="42px" 
            fontWeight="bold"
            letterSpacing="-0.5px"
            mb={4}
          >
            CineLoom Privacy Policy
          </Heading>
          <Text 
            fontSize="18px" 
            color="gray.300"
            maxW="800px"
            mx="auto"
          >
            Last Updated: June 27, 2025
          </Text>
        </Box>

        <Grid 
          templateColumns="300px 1fr" 
          gap={12} 
          w="100%"
          alignItems="flex-start"
        >
          {/* Table of Contents */}
          <GridItem position="sticky" top="120px">
            <Box 
              bg="rgba(45,45,45,0.7)" 
              p={6} 
              borderRadius="12px"
              borderLeft="4px solid"
              borderColor="red.500"
            >
              <Heading fontSize="20px" mb={4} color="white">
                Contents
              </Heading>
              <VStack align="start" spacing={3}>
                <Link href="#info-collected" color="gray.300" _hover={{ color: "red.500" }}>1. Information We Collect</Link>
                <Link href="#info-use" color="gray.300" _hover={{ color: "red.500" }}>2. How We Use Information</Link>
                <Link href="#info-sharing" color="gray.300" _hover={{ color: "red.500" }}>3. Information Sharing</Link>
                <Link href="#your-rights" color="gray.300" _hover={{ color: "red.500" }}>4. Your Privacy Rights</Link>
                <Link href="#data-security" color="gray.300" _hover={{ color: "red.500" }}>5. Data Security</Link>
                <Link href="#children" color="gray.300" _hover={{ color: "red.500" }}>6. Children's Privacy</Link>
                <Link href="#international" color="gray.300" _hover={{ color: "red.500" }}>7. International Transfers</Link>
                <Link href="#policy-updates" color="gray.300" _hover={{ color: "red.500" }}>8. Policy Updates</Link>
                <Link href="#contact" color="gray.300" _hover={{ color: "red.500" }}>Contact Us</Link>
              </VStack>
            </Box>
          </GridItem>

          {/* Main Content */}
          <GridItem>
            <Box 
              bg="rgba(45,45,45,0.7)" 
              p={10} 
              borderRadius="12px"
            >
              <Text fontSize="18px" mb={8} lineHeight="28px">
                Your privacy is important to us. This Privacy Policy explains how CineLoom ("we," "us," or "our") collects, uses, discloses, and safeguards your information when you use our streaming service and related offerings.
              </Text>

              <VStack align="start" spacing={8}>
                <Box id="info-collected">
                  <Heading fontSize="26px" color="white" mb={4} fontWeight="600">
                    1. Information We Collect
                  </Heading>
                  <Text fontSize="16px" lineHeight="26px" mb={4}>
                    We collect information to provide better services to all our users:
                  </Text>
                  <Box pl={4}>
                    <Text fontSize="16px" lineHeight="26px" mb={3}>
                      <strong>• Account Information:</strong> Name, email address, password, payment details, and contact information you provide when creating an account.
                    </Text>
                    <Text fontSize="16px" lineHeight="26px" mb={3}>
                      <strong>• Profile Information:</strong> Watch history, ratings, preferences, and any other information you add to your profile.
                    </Text>
                    <Text fontSize="16px" lineHeight="26px" mb={3}>
                      <strong>• Device Information:</strong> IP address, device type, operating system, browser type, and unique device identifiers.
                    </Text>
                    <Text fontSize="16px" lineHeight="26px">
                      <strong>• Usage Data:</strong> Content viewed, search queries, interaction patterns, and service performance metrics.
                    </Text>
                  </Box>
                </Box>

                <Box id="info-use">
                  <Heading fontSize="26px" color="white" mb={4} fontWeight="600">
                    2. How We Use Your Information
                  </Heading>
                  <Text fontSize="16px" lineHeight="26px" mb={4}>
                    We use the collected information for the following purposes:
                  </Text>
                  <Box pl={4}>
                    <Text fontSize="16px" lineHeight="26px" mb={3}>
                      • To provide, maintain, and improve our streaming service and features
                    </Text>
                    <Text fontSize="16px" lineHeight="26px" mb={3}>
                      • To personalize your experience, including content recommendations
                    </Text>
                    <Text fontSize="16px" lineHeight="26px" mb={3}>
                      • To process transactions and send service-related communications
                    </Text>
                    <Text fontSize="16px" lineHeight="26px" mb={3}>
                      • To detect, prevent, and address technical issues and fraudulent activity
                    </Text>
                    <Text fontSize="16px" lineHeight="26px">
                      • To develop new products, features, and services
                    </Text>
                  </Box>
                </Box>

                <Box id="info-sharing">
                  <Heading fontSize="26px" color="white" mb={4} fontWeight="600">
                    3. Information Sharing and Disclosure
                  </Heading>
                  <Text fontSize="16px" lineHeight="26px" mb={4}>
                    We may share your information in these limited circumstances:
                  </Text>
                  <Box pl={4}>
                    <Text fontSize="16px" lineHeight="26px" mb={3}>
                      <strong>• Service Providers:</strong> With trusted vendors who assist in operating our service (payment processors, cloud hosting providers, analytics services).
                    </Text>
                    <Text fontSize="16px" lineHeight="26px" mb={3}>
                      <strong>• Legal Requirements:</strong> When required by law or to protect our legal rights, including to comply with court orders or government requests.
                    </Text>
                    <Text fontSize="16px" lineHeight="26px">
                      <strong>• Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business.
                    </Text>
                  </Box>
                  <Text fontSize="16px" lineHeight="26px" mt={4} fontWeight="600">
                    We do not sell your personal information to third parties.
                  </Text>
                </Box>

                <Box id="your-rights">
                  <Heading fontSize="26px" color="white" mb={4} fontWeight="600">
                    4. Your Privacy Rights
                  </Heading>
                  <Text fontSize="16px" lineHeight="26px" mb={4}>
                    You have certain rights regarding your personal information:
                  </Text>
                  <Box pl={4}>
                    <Text fontSize="16px" lineHeight="26px" mb={3}>
                      • <strong>Access:</strong> Request a copy of the personal data we hold about you
                    </Text>
                    <Text fontSize="16px" lineHeight="26px" mb={3}>
                      • <strong>Correction:</strong> Update or correct inaccurate information
                    </Text>
                    <Text fontSize="16px" lineHeight="26px" mb={3}>
                      • <strong>Deletion:</strong> Request deletion of your personal data
                    </Text>
                    <Text fontSize="16px" lineHeight="26px" mb={3}>
                      • <strong>Objection:</strong> Object to certain processing activities
                    </Text>
                    <Text fontSize="16px" lineHeight="26px">
                      • <strong>Portability:</strong> Request transfer of your data to another service
                    </Text>
                  </Box>
                  <Text fontSize="16px" lineHeight="26px" mt={4}>
                    To exercise these rights, visit your <Link color="red.500" href="/account">Account Settings</Link> or contact our Privacy Team.
                  </Text>
                </Box>

                <Box id="data-security">
                  <Heading fontSize="26px" color="white" mb={4} fontWeight="600">
                    5. Data Security
                  </Heading>
                  <Text fontSize="16px" lineHeight="26px" mb={4}>
                    We implement comprehensive security measures to protect your information:
                  </Text>
                  <Box pl={4}>
                    <Text fontSize="16px" lineHeight="26px" mb={3}>
                      • AES-256 encryption for data in transit (SSL/TLS) and at rest
                    </Text>
                    <Text fontSize="16px" lineHeight="26px" mb={3}>
                      • Regular security audits and penetration testing
                    </Text>
                    <Text fontSize="16px" lineHeight="26px" mb={3}>
                      • Strict access controls and multi-factor authentication
                    </Text>
                    <Text fontSize="16px" lineHeight="26px">
                      • Employee training on data protection best practices
                    </Text>
                  </Box>
                </Box>

                <Box id="children">
                  <Heading fontSize="26px" color="white" mb={4} fontWeight="600">
                    6. Children's Privacy
                  </Heading>
                  <Text fontSize="16px" lineHeight="26px">
                    Our service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn we have collected personal information from a child under 13, we will take steps to delete such information.
                  </Text>
                </Box>

                <Box id="international">
                  <Heading fontSize="26px" color="white" mb={4} fontWeight="600">
                    7. International Data Transfers
                  </Heading>
                  <Text fontSize="16px" lineHeight="26px">
                    Your information may be transferred to—and maintained on—computers located outside of your country where data protection laws may differ. We ensure appropriate safeguards are in place for these transfers through Standard Contractual Clauses or other approved mechanisms.
                  </Text>
                </Box>

                <Box id="policy-updates">
                  <Heading fontSize="26px" color="white" mb={4} fontWeight="600">
                    8. Policy Updates
                  </Heading>
                  <Text fontSize="16px" lineHeight="26px" mb={2}>
                    We may update this Privacy Policy periodically. When we make material changes, we'll notify you through:
                  </Text>
                  <Box pl={4}>
                    <Text fontSize="16px" lineHeight="26px" mb={2}>• Email to your registered address</Text>
                    <Text fontSize="16px" lineHeight="26px">• Notice within our service</Text>
                  </Box>
                  <Text fontSize="16px" lineHeight="26px" mt={4}>
                    We encourage you to review this policy periodically for any changes.
                  </Text>
                </Box>

                <Divider borderColor="gray.600" my={6} />

                <Box id="contact" w="100%">
                  <Heading fontSize="26px" color="white" mb={4} fontWeight="600">
                    Contact Us
                  </Heading>
                  <Text fontSize="16px" lineHeight="26px" mb={6}>
                    If you have questions about this Privacy Policy or our privacy practices:
                  </Text>
                  <Box bg="rgba(30,30,30,0.7)" p={6} borderRadius="8px">
                    <Text fontSize="16px" lineHeight="26px" mb={3}>
                      <strong>Email:</strong> <Link color="red.500" href="mailto:privacy@cineloom.com">privacy@cineloom.com</Link>
                    </Text>
                    <Text fontSize="16px" lineHeight="26px" mb={3}>
                      <strong>Mail:</strong> CineLoom Privacy Office<br />
                      Kochi, India<br />
                      India
                    </Text>
                    <Text fontSize="16px" lineHeight="26px">
                      <strong>Phone:</strong> +91 22 1234 5678 (Privacy Team)
                    </Text>
                  </Box>
                </Box>
              </VStack>
            </Box>
          </GridItem>
        </Grid>
      </Container>
      
    </Flex>
  );
};

export default PrivacyPolicy;