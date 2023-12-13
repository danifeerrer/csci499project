import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Grid } from '@mui/material';
import Footer from './Footer';


const navLink = {
  textDecoration: 'none',
};


const CnnNotebook = () => (
  <iframe
    src="https://notebooks.githubusercontent.com/view/ipynb?browser=safari&bypass_fastly=true&color_mode=auto&commit=a7458ed07ea518fac7d0480c57c2b8ebc2359615&device=unknown_device&docs_host=https%3A%2F%2Fdocs.github.com&enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f64616e69666565727265722f63617073746f6e655f70726f6a6563742f613734353865643037656135313866616337643034383063353763326238656263323335393631352f436f7069615f64655f427261696e54756d6f72434e4e2e6970796e62&logged_in=true&nwo=danifeerrer%2Fcapstone_project&path=Copia_de_BrainTumorCNN.ipynb&platform=mac&repository_id=691339228&repository_type=Repository&version=16#1daf8af9-9447-49ef-9ed2-3e72a69a0ddf"
    title="Colab Notebook"
    width="100%"
    height="500px"
  />
);

const StrokeNotebook = () => (
  <iframe
    src="https://notebooks.githubusercontent.com/view/ipynb?browser=safari&bypass_fastly=true&color_mode=auto&commit=be082895b77eb6b3cb86d058b8fe104d39e21c21&device=unknown_device&docs_host=https%3A%2F%2Fdocs.github.com&enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f64616e69666565727265722f63617073746f6e655f70726f6a6563742f626530383238393562373765623662336362383664303538623866653130346433396532316332312f627261696e5f7374726f6b652e6970796e62&logged_in=true&nwo=danifeerrer%2Fcapstone_project&path=brain_stroke.ipynb&platform=mac&repository_id=691339228&repository_type=Repository&version=16#9e3f6faa-8439-4f85-afe9-1ee37a094a8d"
    title="Colab Notebook"
    width="100%"
    height="500px"
  />
);

const HeartNotebook = () => (
  <iframe
    src="https://notebooks.githubusercontent.com/view/ipynb?browser=safari&bypass_fastly=true&color_mode=auto&commit=236e5d920045d4d58b657d1d865e686e5d8e94ce&device=unknown_device&docs_host=https%3A%2F%2Fdocs.github.com&enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f64616e69666565727265722f63617073746f6e655f70726f6a6563742f323336653564393230303435643464353862363537643164383635653638366535643865393463652f68656172742e6970796e62&logged_in=true&nwo=danifeerrer%2Fcapstone_project&path=heart.ipynb&platform=mac&repository_id=691339228&repository_type=Repository&version=16#c3019bf5-76a3-482c-afcd-5a6c8345d3fb"
    title="Colab Notebook"
    width="100%"
    height="500px"
  />
);

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


      
      <Grid container spacing={2} >
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

          <CnnNotebook/>

        </Grid>
        <Grid item xs={12} >
          <Link to="/MRI" style={navLink}>
            <Button variant="contained" style={buttonStyle}>
              Get Started with MRI
            </Button>
          </Link>
        </Grid>
      </Grid>

      

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" style={titleStyle} gutterBottom>
            Linear Regression Model
          </Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6" style={descriptionStyle} gutterBottom>
           Our Linear Regression model is utilized to assess stroke risk based on a variety of input features.
            <br />
            <br />
            <strong>How it Works:</strong>
           - Linear Regression predicts the likelihood of stroke by analyzing input features.
            - It establishes a linear relationship between the features and the continuous outcome related to stroke risk.
             - The model undergoes training using labeled data to understand feature relationships and enable predictions.
            <br />
            <br />
      <strong>Training and Evaluation:</strong>
      - Training involves utilizing historical data to refine the model for improved predictive capabilities.
       - Evaluation metrics revolve around measures like mean squared error, R-squared, and root mean squared error (RMSE).
</Typography>


          <StrokeNotebook/>

        </Grid>
        <Grid item xs={12}>
          <Link to="/StrokeCal" style={navLink}>
            <Button variant="contained" style={buttonStyle}>
              Get Started with Stroke Calculation
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
            Our Logistic Regression model is used for heart disease calculation based on various input features.
            <br />
            <br />
            <strong>How it Works:</strong>
            - Logistic Regression estimates the probability of a heart disease occurrence using input features.
            - It models the relationship between the features and the binary outcome of heart disease (yes/no).
            - The model is trained on labeled data to learn the relationships and make predictions.
            <br />
            <br />
            <strong>Training and Evaluation:</strong>
            - We train the model using historical data, optimizing it to make accurate predictions.
            - Evaluation metrics include accuracy, precision, recall, and F1-score.
          </Typography>

          <HeartNotebook/>

        </Grid>
        <Grid item xs={12}>
          <Link to="/heart-disease" style={navLink}>
            <Button variant="contained" style={buttonStyle}>
              Get Started with Heart Disease Calculation
            </Button>
          </Link>
        </Grid>
      </Grid>



    </Box>
  );
};

export default ModelExplanation;
