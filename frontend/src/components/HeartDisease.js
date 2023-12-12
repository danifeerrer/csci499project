import React, { useState } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import heart from  "../data/heart.png"

const HeartDiseaseCal = () => {
  const [formData, setFormData] = useState({
    age: 0,
    bp: 0,
    cholesterol: 0,
    fbs: 0,
    maxhr: 0,
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/heart_disease', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        setResult(data.heart_disease_prediction);
      } else {
        setResult('Error');
      }
    } catch (error) {
      console.error(error);
      setResult('Error');
    }
  };

  return (
    <Container
    maxWidth="md"
      
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '80px',
      }}
    >     
    
     <img src={heart} width="100%" height="auto" />

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} marginTop='10px'>
            <Grid item xs={6}>
        
          <Typography variant="h6">Age</Typography>
          <TextField
            name="age"
            type="number"
            placeholder="Enter Age"
            value={formData.age}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
          <Grid item xs={6}>
          <Typography variant="h6">Blood Pressure (BP)</Typography>
          <TextField
            name="bp"
            type="number"
            placeholder="Enter BP"
            value={formData.bp}
            onChange={handleChange}
            fullWidth
            
          />
        </Grid>
          <Grid item xs={6}>
          <Typography variant="h6">Cholesterol </Typography>
          <TextField
            name="cholesterol"
            type="number"
            placeholder="Enter Cholesterol"
            value={formData.cholesterol}
            onChange={handleChange}
            fullWidth
          />
       </Grid>
          <Grid item xs={6}>
          <Typography variant="h6">Fasting Blood Sugar over 120 (FBS)</Typography>
          <TextField
            name="fbs"
            type="number"
            placeholder="Enter FBS"
            value={formData.fbs}
            onChange={handleChange}
            fullWidth
            
          />
       </Grid>
          <Grid item xs={6}>
          <Typography variant="h6">Maximum Heart Rate (MaxHR)</Typography>
          <TextField
            name="maxhr"
            type="number"
            placeholder="Enter MaxHR"
            value={formData.maxhr}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" fullWidth style={{marginTop: '15px'}}>
          Submit
        </Button>
      </form>
      {result !== null && (
        <div>
          <Typography variant="h6">Heart Disease Probability: {result}</Typography>
        </div>
      )}
    </Container>
  );
};

export default HeartDiseaseCal;
