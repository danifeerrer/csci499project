import React, { useState } from 'react';
import {  TextField, Button, Grid, Typography, MenuItem } from '@mui/material';
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
      const response = await fetch('http://localhost:5003/stroke', {
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
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '100px',
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Age</Typography>
            <TextField
              name="age"
              type="number"
              placeholder="Enter Age"
              value={formData.age}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Hypertension</Typography>
            <TextField
              name="hypertension"
              select
              placeholder="Select"
              value={formData.hypertension}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value={0}>No</MenuItem>
              <MenuItem value={1}>Yes</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Heart Disease</Typography>
            <TextField
              name="heartDisease"
              select
              placeholder="Select"
              value={formData.heartDisease}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value={0}>No</MenuItem>
              <MenuItem value={1}>Yes</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Glucose Level</Typography>
            <TextField
              name="glucoseLevel"
              type="number"
              placeholder="Enter Glucose Level"
              step="0.01"
              value={formData.glucoseLevel}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">BMI</Typography>
            <TextField
              name="bmi"
              type="number"
              placeholder="Enter BMI"
              step="0.1"
              value={formData.bmi}
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
        <div style={{marginTop: '10px'}}>
          <Typography variant="h6">Stroke Probability: {result}</Typography>
        </div>
      )}
    </Container>
  );
};

export default StrokeCal;