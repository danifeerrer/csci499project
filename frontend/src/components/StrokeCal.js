import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Select, MenuItem, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { Container } from '@mui/system';

const StrokeCal = () => {
  const [formData, setFormData] = useState({
    gender: '',
    age: 0,
    hypertension: '',
    heartDisease: '',
    maritalStatus: '',
    workType: '',
    residence: '',
    glucoseLevel: 0,
    bmi: 0,
    smokingStatus: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <Container
      margin="auto"
      sx={{
        flexDirection: 'column',
        display: 'grid',
        margin: 'auto',
        marginTop: '64px',
      }}
    >
      <form onSubmit={handleSubmit}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Gender</Typography>
                <Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <MenuItem value="">Select Gender</MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Age</Typography>
                <TextField
                  name="age"
                  type="number"
                  placeholder="Enter Age"
                  value={formData.age}
                  onChange={handleChange}
                  sx={{ width: '100px' }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Hypertension/High Blood Pressure</Typography>
                <Select
                  name="hypertension"
                  value={formData.hypertension}
                  onChange={handleChange}
                >
                  <MenuItem value="">Select Hypertension/High Blood Pressure</MenuItem>
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Heart Disease</Typography>
                <Select
                  name="heartDisease"
                  value={formData.heartDisease}
                  onChange={handleChange}
                >
                  <MenuItem value="">Select Heart Disease</MenuItem>
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Marital Status</Typography>
                <Select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                >
                  <MenuItem value="">Select Marital Status</MenuItem>
                  <MenuItem value="Married">Married</MenuItem>
                  <MenuItem value="Single">Single</MenuItem>
                </Select>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Work Type</Typography>
                <Select
                  name="workType"
                  value={formData.workType}
                  onChange={handleChange}
                >
                  <MenuItem value="">Select Work Type</MenuItem>
                  <MenuItem value="Private">Private</MenuItem>
                  <MenuItem value="Self-employed">Self-employed</MenuItem>
                  <MenuItem value="Govt_job">Govt Job</MenuItem>
                  <MenuItem value="Stay_at_home">Stay at Home</MenuItem>
                  <MenuItem value="Never_worked">Never Worked</MenuItem>
                </Select>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Residence</Typography>
                <Select
                  name="residence"
                  value={formData.residence}
                  onChange={handleChange}
                >
                  <MenuItem value="">Select Residence</MenuItem>
                  <MenuItem value="Urban">Urban</MenuItem>
                  <MenuItem value="Rural">Rural</MenuItem>
                </Select>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Glucose Level</Typography>
                <TextField
                  name="glucoseLevel"
                  type="number"
                  placeholder="Enter Glucose Level"
                  step="0.01"
                  value={formData.glucoseLevel}
                  onChange={handleChange}
                  sx={{ width: '100px' }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="h6">BMI</Typography>
                <TextField
                  name="bmi"
                  type="number"
                  placeholder="Enter BMI"
                  step="0.1"
                  value={formData.bmi}
                  onChange={handleChange}
                  sx={{ width: '100px' }}
                />
              </TableCell>
              <TableCell>
                <Typography variant="h6">Smoking Status</Typography>
                <Select
                  name="smokingStatus"
                  value={formData.smokingStatus}
                  onChange={handleChange}
                >
                  <MenuItem value="">Select Smoking Status</MenuItem>
                  <MenuItem value="Never_smoked">Never Smoked</MenuItem>
                  <MenuItem value="formerly_smoked">Formerly Smoked</MenuItem>
                  <MenuItem value="smokes">Smokes</MenuItem>
                </Select>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default StrokeCal;
