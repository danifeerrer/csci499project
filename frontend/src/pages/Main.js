import React from 'react';
import { Typography } from '@mui/material';
import MRI from '../components/slider/MRI.jpeg';
import CSV from '../components/slider/CSV.png';
import Footer from './Footer';

const Main = () => {
  return (
    <div>
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
            padding: '50px',
            textAlign: 'center',
        }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between', // To push the images to the left and right edges
                    marginBottom: '50px', // Space between the images and text
                }}
                >
                <div>
                    <img src={MRI} alt="MRI" style={{ width: '75%' }} />
                </div>
                <div>
                    <img src={CSV} alt="CSV" style={{ width: '75%'}} />
                </div>
            </div>
        </div>

        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '10px',
              }}        
        >
            
            <Typography
                variant='h2'
                color='#414466'
                fontFamily='Raleway'
                fontWeight='bold'
                gutterBottom
            >
                How It Works?
            </Typography>
            <Typography
                variant='h6'
                fontFamily='Raleway'
                fontWeight='bold'
                color='#414466'
                display='block'
                gutterBottom
                style={{ marginTop: '20px', fontSize: '24px' }}
            >
                By simply uploading your MRI our machine learning model <br/> will predict whether or not you have a brain tumor.
            </Typography>
        </div>
    </div>
  );
};

export default Main;
