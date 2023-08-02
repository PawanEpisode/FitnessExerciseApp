import React from 'react';
import { Box, Stack, Typography} from '@mui/material';
import ReactLogo from '../assets/images/exercise.svg';

const Footer = () => {
  return (
    <Box mt='40px' bgcolor='#fff3f4'>
    <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
      <img src={ReactLogo} alt='exercise-logo' />
      <Typography variant='h5' mb='20px'>
        Made With ❤️ By <span>Pawan Kumar</span>
      </Typography>
    </Stack>
    </Box>
  )
}

export default Footer;