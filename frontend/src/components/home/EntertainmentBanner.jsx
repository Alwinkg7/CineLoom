import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  IconButton,
  useBreakpointValue
} from "@chakra-ui/react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation"; // Import navigation CSS
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

// Dummy images and icons (replace with your actual image paths)
import Frame1 from "../../assets/frame.png";
import Frame2 from "../../assets/frame.png";
import Red from "../../assets/red.png";
import White from "../../assets/white.png";

const dummyBanners = [
  {
    title: "Endless Entertainment Awaits You",
    subtitle: "Stream unlimited movies, TV shows & more",
    description: "Starting at just ₹149/month. Cancel anytime.",
    image: Frame1,
    watchNowText: "Watch Now",
    watchNowIcon: Red,
    watchNowLink: "/watch-now/movie1",
    watchTrailerText: "Watch Trailer",
    watchTrailerIcon: White,
    watchTrailerLink: "/watch-trailer/movie1",
  },
  {
    title: "Your Daily Dose of Laughter",
    subtitle: "Enjoy top comedy shows and classics",
    description: "Unlimited fun. One simple subscription.",
    image: Frame2,
    watchNowText: "Play Now",
    watchNowIcon: Red,
    watchNowLink: "/watch-now/movie2",
    watchTrailerText: "Preview",
    watchTrailerIcon: White,
    watchTrailerLink: "/watch-trailer/movie2",
  },
];

// Custom navigation buttons component
const SwiperNavButtons = () => {
  const swiper = useSwiper();
  const buttonSize = useBreakpointValue({ base: "lg", md: "xl" });
  const iconSize = useBreakpointValue({ base: "24px", md: "32px" });
  const buttonOffset = useBreakpointValue({ base: "16px", md: "32px" });
  
  return (
    <>
      <IconButton
        aria-label="Previous slide"
        icon={<ChevronLeftIcon boxSize={iconSize} />}
        position="absolute"
        left={buttonOffset}
        top="50%"
        transform="translateY(-50%)"
        zIndex={10}
        size={buttonSize}
        bg="rgba(20, 20, 20, 0.7)"
        color="white"
        borderRadius="full"
        border="none"
        backdropFilter="blur(8px)"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.3)"
        _hover={{
          bg: "rgba(229, 9, 20, 0.9)",
          transform: "translateY(-50%) scale(1.1)",
          boxShadow: "0 6px 40px rgba(229, 9, 20, 0.4)",
        }}
        _active={{
          transform: "translateY(-50%) scale(0.95)",
          bg: "rgba(229, 9, 20, 0.8)",
        }}
        transition="all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        onClick={() => swiper.slidePrev()}
        sx={{
          "& svg": {
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
          }
        }}
      />
      <IconButton
        aria-label="Next slide"
        icon={<ChevronRightIcon boxSize={iconSize} />}
        position="absolute"
        right={buttonOffset}
        top="50%"
        transform="translateY(-50%)"
        zIndex={10}
        size={buttonSize}
        bg="rgba(20, 20, 20, 0.7)"
        color="white"
        borderRadius="full"
        border="none"
        backdropFilter="blur(8px)"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.3)"
        _hover={{
          bg: "rgba(229, 9, 20, 0.9)",
          transform: "translateY(-50%) scale(1.1)",
          boxShadow: "0 6px 40px rgba(229, 9, 20, 0.4)",
        }}
        _active={{
          transform: "translateY(-50%) scale(0.95)",
          bg: "rgba(229, 9, 20, 0.8)",
        }}
        transition="all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        onClick={() => swiper.slideNext()}
        sx={{
          "& svg": {
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
          }
        }}
      />
    </>
  );
};

const EntertainmentBanner = () => {
  return (
    <Box position="relative" borderRadius="7px">
      <Swiper
        modules={[Autoplay, Navigation]} // Add Navigation module
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        // navigation={true} // Enable built-in navigation
      >
        {dummyBanners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Box
              position="relative"
              height={{ base: "auto", md: "550px" }}
              overflow="hidden"
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                backgroundImage={`url(${banner.image})`}
                backgroundSize="cover"
                backgroundPosition="center"
                zIndex={0}
                transition="opacity 0.5s ease-in-out"
              />
              
              {/* Gradient overlay for better text visibility */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                // bg="linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)"
                zIndex={1}
              />

              <Flex
                direction="row"
                align="center"
                justify="space-between"
                maxW="1200px"
                mx="auto"
                position="relative"
                height="100%"
                zIndex={2}
                px={4}
              >
                <Box flex={1} textAlign="left">
                  <Heading color="white" mb={4}>
                    {banner.title}
                  </Heading>
                  <Text color="whiteAlpha.900" mb={6}>
                    {banner.subtitle}
                  </Text>
                  <Text color="white" fontWeight="semibold" mb={6}>
                    {banner.description}
                  </Text>
                  <Link to="/login">
                    <Button
                      colorScheme="whiteAlpha"
                      color="white"
                      bg="red"
                      leftIcon={
                        <Image
                          src={banner.watchNowIcon}
                          alt="icon"
                          width="16px"
                        />
                      }
                      _hover={{
                        bg: "red.700",
                        transform: "scale(1.05)",
                      }}
                    >
                      Join Loom
                    </Button>
                  </Link>
                </Box>

                <Flex
                  direction="row"
                  gap={4}
                  position="absolute"
                  bottom={{ base: 10, md: 20 }}
                  left={{ base: 4, md: 8 }}
                >
                  <Link to={banner.watchNowLink}>
                    <Button
                      bg="white"
                      color="black"
                      leftIcon={
                        <Image
                          src={banner.watchNowIcon}
                          alt="watch now"
                          width="16px"
                        />
                      }
                    >
                      {banner.watchNowText}
                    </Button>
                  </Link>
                  <Link to={banner.watchTrailerLink}>
                    <Button
                      variant="outline"
                      color="white"
                      borderColor="whiteAlpha.400"
                      leftIcon={
                        <Image
                          src={banner.watchTrailerIcon}
                          alt="watch trailer"
                          width="16px"
                        />
                      }
                    >
                      {banner.watchTrailerText}
                    </Button>
                  </Link>
                </Flex>
              </Flex>
            </Box>
          </SwiperSlide>
        ))}
        {/* Custom navigation buttons */}
        <SwiperNavButtons />
      </Swiper>
    </Box>
  );
};

export default EntertainmentBanner;