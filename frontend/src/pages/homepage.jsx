import React from 'react'
import { Box } from '@chakra-ui/react'  
import ImageSwiper from '../components/home/ImageCarousel.jsx'
import Watch from '../components/home/Watch.jsx'
import About from '../components/home/About.jsx'
import Questions from '../components/home/Questions.jsx'
import EntertainmentBanner from '../components/home/EntertainmentBanner.jsx'
import GenreCarousel from '../components/home/Genre.jsx';


const Homepage = () => {
  return (
    <Box pt={20}>
        <EntertainmentBanner/>
        <ImageSwiper />
        <GenreCarousel />
        <Watch />
        <About />
        <Questions />
    </Box>
  )
}

export default Homepage