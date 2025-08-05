import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Image
} from '@chakra-ui/react';

import Questionicon from '../../assets/qn.png'

const Questions = () => {
  const faqItems = [
    {
      question: "What is CineLoom",
      answer: "Platform for Cinephiles."
    },
    {
      question: "What is CineLoom",
      answer: "Platform for Cinephiles."
    },
    {
      question: "What is CineLoom",
      answer: "Platform for Cinephiles."
    },
    {
      question: "What is CineLoom",
      answer: "Platform for Cinephiles."
    },
    {
      question: "What is CineLoom",
      answer: "Platform for Cinephiles."
    },

  ]

  return (
    <Box 
      position="relative"
      overflow="hidden"
      bg="black"
      p={6}
      px={10}
    >
      <Text
        display={'flex'} 
        alignItems={'center'} 
        gap={'10px'}
        fontWeight={'bold'}
        fontSize={'3xl'}
        color="white"
        p={4}
      >
        <Image
          src={Questionicon}
          alt='Question icon'
          boxSize={'30px'}
        />
        Got Questions? We've Got Answers!
      </Text>
      
      <Accordion allowToggle width="100%">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} border="none" mb={4}>
            <h2>
              <AccordionButton 
                _expanded={{ bg: '#FF0102', color: 'white' }}
                bg="#1E1E1E"
                color="white"
                py={6}
                borderRadius="md"
                _hover={{ bg: '#1E1E1E' }}
              >
                <Box as='span' flex='1' textAlign='left' fontSize="lg" fontWeight="medium">
                  {item.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel 
              pb={4} 
              bg="#1E1E1E"
              color="white"
              borderRadius="md"
              fontSize="md"
              fontWeight='100px'
              
            >
              {item.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  )
}

export default Questions