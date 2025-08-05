import React from 'react';
import { Box, Image, Text, Flex, Stack } from '@chakra-ui/react';
import Logo from '../assets/Logo.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      backgroundColor={'#000000'}
      color="white"  
      position="relative"
     
      
      bg="black"
    >
      <Flex direction={['column', 'column', 'row']} justify="space-between"  p={4}>
        <Box mb={[3, 3, 0]} textAlign={['center', 'center', 'left']}>
          <Link to="/">
            <Image src={Logo} alt="CineLoom logo" height="30px" mx={['auto', 'auto', 0]} />
          </Link>
          <Text mt={2} fontSize="xs" color="gray.400">
            Your premium entertainment destination
          </Text>
        </Box>

        <Flex
          direction={['column', 'row']}
          wrap="wrap"
          justify={['center', 'space-between']}
          align="center"
          gap={[2, 4, 6]}
          mt={[3, 3, 0]}
          p={2}
        >
          <Link to="/faq" fontSize="xs" color="gray.400" _hover={{ color: 'white' }}>
            FAQ
          </Link>
          <Link to="/privacy" fontSize="xs" color="gray.400" _hover={{ color: 'white' }}>
            Privacy Policy
          </Link>
          <Link to="/cookies" fontSize="xs" color="gray.400" _hover={{ color: 'white' }}>
            Cookies
          </Link>
          <Link to="/help" fontSize="xs" color="gray.400" _hover={{ color: 'white' }}>
            Help Center
          </Link>
          <Link to="/terms" fontSize="xs" color="gray.400" _hover={{ color: 'white' }}>
            Terms of Use
          </Link>
          <Link to="/contact" fontSize="xs" color="gray.400" _hover={{ color: 'white' }}>
            Contact Us
          </Link>
          <Link to="/about" fontSize="xs" color="gray.400" _hover={{ color: 'white' }}>
            About Us
          </Link>
          <Link to="/careers" fontSize="xs" color="gray.400" _hover={{ color: 'white' }}>
            Careers
          </Link>
          <Link to="/press" fontSize="xs" color="gray.400" _hover={{ color: 'white' }}>
            Press
          </Link>

        </Flex>
      </Flex>

      <Flex justify="center" p={1}>
        <Stack direction="row" spacing={4}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} color="#b3b3b3" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} color="#b3b3b3" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} color="#b3b3b3" />
          </a>
        </Stack>
      </Flex>

      <Flex justify={['center', 'flex-end']} borderTop="1px solid" borderColor="gray.800" p={1}>
        <Text fontSize="xs" color="gray.500">
          © {new Date().getFullYear()} CineLoom. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
