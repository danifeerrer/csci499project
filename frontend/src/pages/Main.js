import React from 'react';
import {Grid, Box, Paper, Typography, Button  } from '@mui/material';
import Footer from './Footer';
import ImgSlide from '../components/slider/ImgSlide';

import patient from '../components/images/patient.jpeg'
import doctors from '../components/images/doctors.png'
import lab from '../components/images/lab.png'


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
    margin: 'auto',
    padding: '80px',
    justifyContent: 'center',
    alignItems: 'center',
  };



  return (
    <Paper style={containerStyle} className="Main" >

      <Grid>
        <ImgSlide/>
      </Grid>

      <h1 style={{flex: 1, display:'flex', justifyContent:'center'}}>Target Audiences for Our Website are </h1>
      <Box 
        marginTop='50px'
      >

      <div style={images} >
        <img src={patient} width="400px" height="250px" alt="patient" />
        <Typography style={explanation}> Patient or Anyone Who is Concerned About Brain Tumor, can use the features on our website</Typography>
      </div>
      
      <div style={images}>
        <img src={doctors} width="400px" height="250px" alt="doctors" />
        <Typography style={explanation}>Doctors and Medical professionals who need a 4th opinion When Evaluating Brain MRI</Typography>
      </div>
      
      <div style={images}>
        <img src={lab} width="400px" height="250px" alt="lab" />
        <Typography style={explanation}>Researchers and Lab Professionals Who Study About Brain Tumor </Typography>
      </div>


      </Box>
     

      <Footer />
    </Paper>
  );
};

export default Main;
