import React from 'react';
import {
  Box,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Button,
  Input,
  Container
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const faqs = [
  {
    question: "What is CineLoom?",
    answer: "CineLoom is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. With CineLoom, you can enjoy unlimited viewing of our content without having to watch a single commercial. Always. There's always something new to discover, and new TV shows and movies are added every week!"
  },
  {
    question: "How much does CineLoom cost?",
    answer: "Watch CineLoom on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans start at ₹199 a month. No extra costs, no contracts. Choose between our Basic, Standard, and Premium plans to enjoy CineLoom in HD or Ultra HD quality, with the option to watch on multiple screens at the same time."
  },
  {
    question: "Where can I watch?",
    answer: "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your CineLoom account to watch instantly on the web at cineloom.com from your personal computer or on any internet-connected device that offers the CineLoom app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take CineLoom with you anywhere."
  },
  {
    question: "How do I cancel?",
    answer: "CineLoom is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees — start or stop your account anytime. If you cancel, your account will remain active for the remainder of your current billing period. After that, you won't be charged again."
  },
  {
    question: "What can I watch on CineLoom?",
    answer: "CineLoom has an extensive library of feature films, documentaries, TV shows, anime, award-winning CineLoom originals, and more. Watch as much as you want, anytime you want. Our content is continuously updated with new releases, including exclusive CineLoom Originals you won't find anywhere else. From binge-worthy series to blockbuster movies, there's always something exciting to watch."
  },
  {
    question: "Is CineLoom good for kids?",
    answer: "The CineLoom Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see. Plus, kids can enjoy curated content just for them, with popular characters and educational programming."
  },
  {
    question: "Why am I seeing different content in different regions?",
    answer: "Our library varies by region due to licensing agreements and local content availability. We're constantly working to bring more titles to more regions. Some CineLoom Originals are available globally, while other titles may be specific to certain countries. When you travel, the content available to you will match the country you're in."
  },
  {
    question: "How does the free trial work?",
    answer: "Try us free for 7 days! If you enjoy your CineLoom trial, do nothing and your membership will automatically continue for as long as you choose to remain a member. Cancel anytime before your trial ends and you won't be charged. There's no commitment, no cancellation fees, and no obligation. You'll have full access to our entire library during your free trial."
  }
];

const Faq = () => {
  return (
    <Flex 
      direction="column" 
      minH="100vh" 
      bg="black" 
      color="white"
    >
      <Container 
        maxW="800px" 
        px={[4, 6, 8]} 
        py={[8, 12, 16]}
        centerContent
      >
        <Heading 
          mb={[6, 8, 10]} 
          fontSize={["2xl", "3xl", "4xl"]} 
          textAlign="center"
          fontWeight="bold"
          letterSpacing="tight"
        >
          Frequently Asked Questions
        </Heading>
        
        <Accordion allowToggle width="100%" mb={12}>
          {faqs.map((faq, idx) => (
            <AccordionItem 
              key={idx} 
              borderColor="gray.700" 
              mb={2}
              border="none"
            >
              <AccordionButton 
                bg="rgba(45,45,45,0.7)"
                p={6}
                _hover={{ bg: "rgba(65,65,65,0.7)" }}
                _expanded={{ bg: "rgba(65,65,65,0.7)" }}
                fontSize="xl"
                textAlign="left"
              >
                <Box flex="1" fontWeight="semibold">
                  {faq.question}
                </Box>
                <ChevronDownIcon 
                  w={6} 
                  h={6} 
                  transition="transform 0.2s"
                  _expanded={{ transform: "rotate(180deg)" }}
                />
              </AccordionButton>
              <AccordionPanel 
                bg="rgba(45,45,45,0.7)"
                p={6}
                color="gray.300"
                fontSize="lg"
                lineHeight="tall"
              >
                {faq.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Netflix-style call to action */}
        <Box textAlign="center" w="100%">
          <Text fontSize="xl" mb={6} px={[0, 4, 8]}>
            Ready to watch? Enter your email to create or restart your membership.
          </Text>
          <Flex 
            direction={["column", "row"]} 
            gap={4} 
            maxW="600px" 
            mx="auto"
            align="center"
          >
            <Input 
              placeholder="Email address" 
              size="lg" 
              bg="rgba(20,20,20,0.7)"
              border="1px solid gray"
              _focus={{ 
                boxShadow: "none",
                borderColor: "white"
              }}
              flex="1"
              w="100%"
              _placeholder={{ color: "gray.400" }}
            />
            <Button 
              size="lg" 
              bg="#E50914" 
              _hover={{ bg: "#F40612" }}
              px={8}
              py={7}
              rightIcon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              fontSize="lg"
              fontWeight="normal"
            >
              Get Started
            </Button>
          </Flex>
          <Text mt={4} color="gray.400" fontSize="sm">
            By clicking "Get Started", you agree to our Terms of Service and acknowledge that you've read our Privacy Policy.
          </Text>
        </Box>
      </Container>
      
    </Flex>
  );
};

export default Faq;