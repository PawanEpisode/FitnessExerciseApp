import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import HeroBannerImage from '../assets/images/banner.png'

const theme = createTheme({
  palette: {
    error: {
      main: "#FF2625",
    },
  },
});

const HeroBanner = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          mt: { lg: "212px", xs: "70px" },
          ml: { sm: "50px" },
        }}
        position="relative"
        p="20px"
      >
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
          Fitness Club
        </Typography>
        <Typography
          fontWeight="700"
          sx={{
            fontSize: { lg: "44px", xs: "40px" },
          }}
          mb='23px' mt='30px'
        >
          Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
          Check out the most effective exercises
        </Typography>
        <Button variant="contained" color="error" href="#exercises" sx={{ padding: '10px'}}>
          Explore Exercises
        </Button>
        <Typography
        fontWeight={600}
        fontSize='200px'
        color='#ff2625'
        sx={{
            opacity: 0.1,
            display: { lg: 'block', xs: 'none'},
            
        }}
        ml={{lg: '-10px', xs: '0px'}}
        mt={{lg: '-30px', xs: '0px'}}
        >
        Exercise
        </Typography>
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img"/>
      </Box>
    </ThemeProvider>
  );
};

export default HeroBanner;
