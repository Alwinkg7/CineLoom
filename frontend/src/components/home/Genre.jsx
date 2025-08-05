import React, { useRef, useState } from 'react';
import {
  Box,
  Image,
  Text,
  IconButton
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import Trending from '../../assets/trending.png';
import Thudarum from '../../assets/thudarum.png';
import Antman from '../../assets/antman.png';
import Padakalam from '../../assets/padakalam.png';
import Hit3 from '../../assets/hit3.png';
import Keralafiles from '../../assets/keralafiles.png';
import Devara from '../../assets/devara.png';

const genres = [
  { name: 'Comedy', image: Padakalam },
  { name: 'Drama', image: Thudarum },
  { name: 'Horror', image: Hit3 },
  { name: 'Action', image: Devara },
  { name: 'Sci-Fi', image: Antman },
  { name: 'Thriller', image: Keralafiles },
  { name: 'Romance', image: Keralafiles },
  { name: 'Rom-com', image: Keralafiles },
  { name: 'Animation', image: Keralafiles },
];

const GenreCarousel = () => {
  const navigate = useNavigate();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClick = (genre) => {
    navigate(`/filter-movies?genre=${genre}`);
  };

  return (
    <Box position="relative" overflow="hidden" bg="black" p={6} px={10}>
      <Box mt="100px">
        <Text
          display="flex"
          alignItems="center"
          gap="10px"
          fontWeight="bold"
          fontSize="3xl"
          color="white"
          p={4}
        >
          <Image src={Trending} alt="Genre Icon" boxSize="30px" />
          Browse by Genre
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
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          style={{ padding: '10px 0' }}
        >
          {genres.map((genre, index) => (
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
                onClick={() => handleClick(genre.name)}
              >
                <Image
                  src={genre.image}
                  alt={genre.name}
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
                  display="flex"
                  alignItems="flex-end"
                  justifyContent="center"
                  pb={4}
                >
                  <Text color="white" fontWeight="bold" fontSize="xl">
                    {genre.name}
                  </Text>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
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

export default GenreCarousel;
