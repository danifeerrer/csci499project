import React, { useState } from 'react';
import styled from 'styled-components';
import UploadIcon from '@mui/icons-material/Upload';
import { visuallyHidden } from '@mui/utils';

const Container = styled.div`
  margin: auto;
  display: grid;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  text-align: center;
  padding: 16px; /* Adjust the padding as needed */
`;

const Heading = styled.h4`
  font-family: 'Raleway';
  margin-top: 80px;
  font-weight: bold;
  color: #404040;
  font-size: 24px; /* Adjust the font size as needed */
  margin-bottom: 16px; /* Adjust the margin as needed */
`;

const UploadButton = styled.label`
  display: inline-block;
  margin-top: 16px; /* Adjust the margin as needed */
  padding: 8px 16px; /* Adjust the padding as needed */
  background-color: #2196F3; /* Example color, adjust as needed */
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 16px; /* Adjust the margin as needed */
`;

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 300px; /* Adjust the max height as needed */
`;

const FileText = styled.p`
  color: #888;
  margin-top: 8px; /* Adjust the margin as needed */
`;

const PredictButton = styled.button`
  display: inline-block;
  margin-top: 20px; /* Adjust the margin as needed */
  padding: 8px 16px; /* Adjust the padding as needed */
  background-color: #4CAF50; /* Example color, adjust as needed */
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;

const PredictionText = styled.p`
  color: #333;
  margin-top: 8px; /* Adjust the margin as needed */
`;

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
    <Container>
      <Heading>Upload your Brain MRI and find out if you have a possible brain tumor today</Heading>

      <UploadButton>
        Upload
        <input type="file" style={visuallyHidden} accept="image/jpeg, image/png, image/jpg" onChange={handleFileChange} />
      </UploadButton>

      {selectedFile && (
        <ImagePreviewContainer>
          <ImagePreview src={URL.createObjectURL(selectedFile)} alt="Selected Image" />
          <PredictButton onClick={handlePrediction}>
            Predict MRI
          </PredictButton>
        </ImagePreviewContainer>
      )}

      {prediction && (
        <PredictionText>Prediction: {prediction}</PredictionText>
      )}
    </Container>
  );
}

export default MRI;