import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Grid } from '@mui/material';
import Footer from './Footer';

const ModelExplanation = () => {
  const containerStyle = {
    margin: 'auto',
    padding: '50px',
    paddingTop: '100px',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  };

  const descriptionStyle = {
    fontSize: '1.2rem',
    fontFamily: 'Arial, sans-serif',
    color: '#444',
    display: 'block',
    marginBottom: '1.5rem',
  };

  const buttonStyle = {
    backgroundColor: '#0073e6',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginBottom: '50px', 
  };

  return (
    <Box style={containerStyle} className="ModelExplanation">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" style={titleStyle} gutterBottom>
            Our Model: Convolutional Neural Network (CNN)
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" style={descriptionStyle} gutterBottom>
            Our advanced Convolutional Neural Network (CNN) plays a crucial role in the accurate identification of brain tumors from MRI images.
            <br />
            <br />
            <strong>How it Works:</strong>
            - The CNN employs convolutional layers to extract essential features from MRI scans, capturing intricate details and patterns.
            - Pooling layers downsample feature maps, enhancing computational efficiency while preserving valuable information.
            - Flattening and fully connected layers process the extracted features to make classification decisions.
            - The output layer provides the probability of tumor presence.
            <br />
            <br />
            <strong>Training and Evaluation:</strong>
            - Our CNN is trained on labeled MRI data, adjusting its parameters to minimize errors.
            - Techniques like regularization and data augmentation are used to improve performance.
            - Evaluation metrics include accuracy, precision, recall, and F1-score.
            <br />
            <br />
            <strong>Inference:</strong>
            - In real-time, our model can analyze new MRI images, providing critical information for early tumor detection and diagnosis.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Link to="/MRI">
            <Button variant="contained" style={buttonStyle}>
              Get Started with MRI
            </Button>
          </Link>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" style={titleStyle} gutterBottom>
            Logistic Regression Model
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" style={descriptionStyle} gutterBottom>
            Our Logistic Regression model is used for stroke risk calculation based on various input features.
            <br />
            <br />
            <strong>How it Works:</strong>
            - Logistic Regression estimates the probability of a stroke occurrence using input features.
            - It models the relationship between the features and the binary outcome of stroke (yes/no).
            - The model is trained on labeled data to learn the relationships and make predictions.
            <br />
            <br />
            <strong>Training and Evaluation:</strong>
            - We train the model using historical data, optimizing it to make accurate predictions.
            - Evaluation metrics include accuracy, precision, recall, and F1-score.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Link to="/StrokeCal">
            <Button variant="contained" style={buttonStyle}>
              Get Started with Stroke Calculation
            </Button>
          </Link>
        </Grid>
      </Grid>

      <Footer />
    </Box>
  );
};

export default ModelExplanation;
