import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      bgcolor="lightgray"
      padding="20px"
      left="0"
      width="100%"
    >
      <Typography variant="body2">
        DISCLAIMER: We are not medical professionals, nor do we claim to be. If you are unsure about the results of our machine learning model, please consult an appropriate medical professional.
      </Typography>
    </Box>
  );
};

export default Footer;