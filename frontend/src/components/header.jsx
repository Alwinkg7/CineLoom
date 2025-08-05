import React from 'react';
import {
  Box,
  Flex,
  Image,
  Button,
  Select,
  IconButton,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchIcon } from '@chakra-ui/icons';
import Logo from '../assets/logo.png';
import Vector from '../assets/vector.png';
import { useHeaderStore } from '../store/useHeaderStore';

const Header = () => {
  const navigate = useNavigate();
  const { language, setLanguage } = useHeaderStore();

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <Box >
      <Flex
        as="header"
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="80px"
        alignItems="center"
        justifyContent="space-between"
        zIndex="10"
        bg="black"
        p={4}
      >
        {/* Logo */}
        <Box>
          <Link to="/">
            <Image
              src={Logo}
              alt="CineLoom Logo"
              marginTop="30px"
              marginLeft="60px"
            />
          </Link>
        </Box>

        {/* Right Section */}
        <Flex alignItems="center" p={3} gap={4}>
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            variant="ghost"
            color="white"
            fontSize="20px"
            onClick={handleSearchClick}
            _hover={{ bg: 'transparent', color: 'red.500' }}
          />

          <Select
            size="sm"
            width="120px"
            height="40px"
            bg="black"
            color="white"
            borderColor="white"
            borderRadius="4px"
            _hover={{ borderColor: 'white' }}
            _focus={{ borderColor: 'white', boxShadow: '0 0 0 1px white' }}
            iconColor="white"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option style={{ color: 'black' }}>English</option>
            <option style={{ color: 'black' }}>Malayalam</option>
            <option style={{ color: 'black' }}>Hindi</option>
            <option style={{ color: 'black' }}>Tamil</option>
          </Select>

          <Link to="/login">
            <Button
              bg="#FF0102"
              color="white"
              _hover={{ bg: '#cc0000' }}
              size="md"
              borderRadius="4px"
              height="40px"
              leftIcon={<Image src={Vector} alt="Login Icon" width="16px" />}
            >
              Join Loom
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
