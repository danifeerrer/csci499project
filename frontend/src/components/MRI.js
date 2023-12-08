import React, { useState } from 'react';
import { Box, Button, Typography, Input } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import { visuallyHidden } from '@mui/utils';

const MRI = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  const handlePrediction = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      try {
        const response = await fetch('http://localhost:5001/cnn', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          setPrediction(result.result);
          console.log(result.result)
        } else {
          console.error('Error:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <Box margin='auto' display="grid" justifyContent="center" alignItems="center" minHeight="50vh">
      <Typography variant='h4' fontFamily='Raleway' fontWeight='bold' color='#404040'>
        Upload images and find out if you have a possible brain tumor today
      </Typography>

      <Button size='small' component="label" variant="contained" startIcon={<UploadIcon />}>
        Upload
        <Input type="file" style={visuallyHidden} accept="image/jpeg, image/png, image/jpg" onChange={handleFileChange} />
      </Button>

      {selectedFile && (
        <>
          <Typography variant='body1' color='textSecondary'>
            Selected File: {selectedFile.name} {/* Display the selected file name */}
          </Typography>

          <Button variant="contained" onClick={handlePrediction}>
            Predict MRI
          </Button>
        </>
      )}
      {prediction && (
            <Typography variant='body1' color='textPrimary'>
              Prediction: {prediction} {/* Display the prediction result */}
            </Typography>
          )}
    </Box>
  );
}

export default MRI;