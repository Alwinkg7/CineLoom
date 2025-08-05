import React from 'react'
import { Box, Image, Text, Container, Flex } from '@chakra-ui/react'
import Aboutlogo from '../../assets/about.png'
import About1 from '../../assets/about1.png'
import About2 from '../../assets/about2.png'
import About3 from '../../assets/about3.png'

const About = () => {
  return (
    <>
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
                p={6}
            >
                <Image
                    src={Aboutlogo}
                    alt='aboutlogo'
                    boxSize={'30px'}
                />
                Why it's Worth it
            </Text>
            <Container maxW="container.2xl" bg="#1E1E1E" borderRadius={10} py={8}>
            <Flex
                justify="space-between"
                align="center"
                width="100%"
                gap={6}
                px={6}
            >
                {/* Left-aligned box */}
                <Box>
                <Image
                    src={About1}
                    alt="about1"
                    borderRadius="lg"
                    objectFit="contain"
                    height="400px"
                    width="auto"
                />
                </Box>

                {/* Center-aligned box */}
                <Box>
                <Image
                    src={About2}
                    alt="about2"
                    borderRadius="lg"
                    objectFit="cover"
                    height="400px"
                    width="auto"
                />
                </Box>

                {/* Right-aligned box */}
                <Box>
                <Image
                    src={About3}
                    alt="about3"
                    borderRadius="lg"
                    objectFit="cover"
                    height="400px"
                    width="auto"
                />
                </Box>
            </Flex>
            </Container>

        </Box>
    </>
  )
}

export default About