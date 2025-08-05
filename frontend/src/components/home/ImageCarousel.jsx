import React, { useState, useRef } from 'react';
import { Box, Flex, Image, IconButton, Text } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import Thudarum from '../../assets/thudarum.png';
import Antman from '../../assets/antman.png';
import Padakalam from '../../assets/padakalam.png';
import Hit3 from '../../assets/hit3.png';
import Keralafiles from '../../assets/keralafiles.png';
import Trending from '../../assets/trending.png';
import Devara from '../../assets/devara.png';

const PerfectCarousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const images = [
    { src: Thudarum, alt: 'Thudarum movie' },
    { src: Hit3, alt: 'Hit3 movie' },
    { src: Keralafiles, alt: 'Kerala Files movie' },
    { src: Padakalam, alt: 'Padakalam movie' },
    { src: Antman, alt: 'Antman movie' },
    { src: Devara, alt: 'Devara movie' },
    { src: Thudarum, alt: 'Thudarum movie' },
    { src: Padakalam, alt: 'Padakalam movie' },
    { src: Hit3, alt: 'Hit3 movie' },
  ];

  return (
    <Box position="relative" overflow="hidden" bg="black" p={6} px={10}>
      <Box mt="100px">
        <Text
          display={'flex'}
          alignItems={'center'}
          gap={'10px'}
          fontWeight={'bold'}
          fontSize={'3xl'}
          color="white"
          p={4}
        >
          <Image src={Trending} alt="Trending Icon" boxSize="30px" />
          Trending Now
        </Text>
      </Box>

      <Box position="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          style={{ padding: '10px 0' }}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: '300px',
                transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                zIndex: hoveredIndex === index ? 2 : 1,
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Box
                height="400px"
                position="relative"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="xl"
                cursor="pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  height="50%"
                  bgGradient="linear(to-t, blackAlpha.800, transparent)"
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Only 2 visible buttons (refs used) */}
        <IconButton
          ref={prevRef}
          aria-label="Previous"
          icon={<FiChevronLeft size={24} />}
          position="absolute"
          left="20px"
          top="50%"
          transform="translateY(-50%)"
          zIndex="10"
          bg="rgba(0,0,0,0.7)"
          color="white"
          borderRadius="full"
          size="lg"
          _hover={{
            bg: 'rgba(0,0,0,0.9)',
            transform: 'translateY(-50%) scale(1.1)',
          }}
          transition="all 0.2s ease"
          boxShadow="md"
        />

        <IconButton
          ref={nextRef}
          aria-label="Next"
          icon={<FiChevronRight size={24} />}
          position="absolute"
          right="20px"
          top="50%"
          transform="translateY(-50%)"
          zIndex="10"
          bg="rgba(0,0,0,0.7)"
          color="white"
          borderRadius="full"
          size="lg"
          _hover={{
            bg: 'rgba(0,0,0,0.9)',
            transform: 'translateY(-50%) scale(1.1)',
          }}
          transition="all 0.2s ease"
          boxShadow="md"
        />
      </Box>
    </Box>
  );
};

export default PerfectCarousel;
