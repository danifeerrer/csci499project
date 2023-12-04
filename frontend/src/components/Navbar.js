import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, NavLink as Router } from 'react-router-dom'; // Import Link
import logo from '../components/images/logo.png';

const Navbar = () => {
  const navBarStyle = {
    position: 'fixed',

    left: 0,
    right: 0,
    top: 0,
    background: '#2c3e50',
    
  };

  const buttonStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#ecf0f1',
    marginLeft: '10px',
    ":hover": {
      backgroundColor: '#3498db',
      color: '#ecf0f1',
    },
  };

  return (
    <AppBar sx={navBarStyle}>
      <Toolbar>
        <img src={logo} width="100px" alt="Logo" />
        <NavLink
          to="/"
          activeClassName="active" 
          className="nav-link"
        >
          <Button sx={buttonStyle} color="inherit">
            Home
          </Button>
        </NavLink>

        <NavLink to="/model-explanation" activeClassName="active" className="nav-link">
  <Button sx={buttonStyle} color="inherit">
    How It Works
  </Button>
</NavLink>

        <NavLink
          to="/MRI"
          activeClassName="active" 
          className="nav-link"
        >
          <Button sx={buttonStyle} color="inherit">
            MRI
          </Button>
        </NavLink>
        <NavLink
          to="/StrokeCal"
          activeClassName="active" 
          className="nav-link"
        >
          <Button sx={buttonStyle} color="inherit">
            Calculate Stroke
          </Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
