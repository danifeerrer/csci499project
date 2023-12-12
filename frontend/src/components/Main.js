import React from 'react';
import {Grid, Box, Paper, Typography, Button  } from '@mui/material';
import Footer from './Footer';
import ImgSlide from './ImgSlide';



const images = {
  flex: 1, 
  margin: '10px', 
  display: 'flex', 
  flexWrap: 'wrap'
}

const explanation= {
  marginTop: '20px',
  marginRight:'20px',
  marginLeft:'20px',
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.3rem',
}



const Main = () => {
  const containerStyle = {

    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: "none",
  };



  return (
    <Paper style={containerStyle} className="Main" >

      <Grid>
        <ImgSlide/>
      </Grid>
    

      <Footer/>

    </Paper>
  );
};

export default Main;
