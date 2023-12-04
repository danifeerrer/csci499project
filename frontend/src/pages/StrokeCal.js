import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Select, MenuItem } from '@mui/material';
import { Container } from '@mui/system';

const StrokeCal = () => {
  const [formData, setFormData] = useState({
    age: 0,
    hypertension: 0,
    heartDisease: 0,
    glucoseLevel: 0,
    bmi: 0,
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
      const response = await fetch('http://localhost:5000/stroke', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data.stroke_probability);
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
      margin="auto"
      sx={{
        flexDirection: 'column',
        display: 'flex',
        margin: 'auto',
        marginTop: '30px',
      }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <Typography variant="h6">Age</Typography>
          <TextField
            name="age"
            type="number"
            placeholder="Enter Age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <Typography variant="h6">Hypertension/High Blood Pressure</Typography>
          <TextField
            name="hypertension"
            type="number"
            placeholder="Enter hypertension"
            value={formData.hypertension}
            onChange={handleChange}
          />
        </div>
        <div>
          <Typography variant="h6">Heart Disease</Typography>
          <TextField
            name="heartDisease"
            type="number"
            placeholder="Enter heart disease"
            value={formData.heartDisease}
            onChange={handleChange}
          />
        </div>
        <div>
          <Typography variant="h6">Glucose Level</Typography>
          <TextField
            name="glucoseLevel"
            type="number"
            placeholder="Enter Glucose Level"
            step="0.01"
            value={formData.glucoseLevel}
            onChange={handleChange}
          />
        </div>
        <div>
          <Typography variant="h6">BMI</Typography>
          <TextField
            name="bmi"
            type="number"
            placeholder="Enter BMI"
            step="0.1"
            value={formData.bmi}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      {result !== null && (
        <div>
          <Typography variant="h6">Stroke Probability: {result}</Typography>
        </div>
      )}
    </Container>
  );
};

export default StrokeCal;