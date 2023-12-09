import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, NavLink as Router } from 'react-router-dom'; // Import Link
import logo from '../data/logo.png';

const Navbar = () => {
  const navBarStyle = {
    position: 'fixed',
    background: '#2c3e50'
  };

  const navLink = {
    textDecoration: 'none',
  };

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#ecf0f1',
    marginLeft: '10px',
    ":hover": {
      backgroundColor: '#3498db',
      color: '#ecf0f1',
    },
    ":focus": {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  };

  // Check if the token is present in localStorage
  const token = localStorage.getItem('token');
  const isLoggedIn = token;

  return (
    <AppBar sx={navBarStyle}>
      <Toolbar>
        <img src={logo} width="100px" alt="Logo" />
        <NavLink
          to="/"
          activeClassName="active"
          className="nav-link"
          style={navLink}
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

        <NavLink to="/code" activeClassName="active" className="nav-link" style={navLink}>
          <Button sx={buttonStyle} color="inherit">
            Code
          </Button>
        </NavLink>

        

        <NavLink
          to="/MRI"
          activeClassName="active"
          className="nav-link"
          style={navLink}
        >
          <Button sx={buttonStyle} color="inherit">
            MRI
          </Button>
        </NavLink>
        <NavLink
          to="/StrokeCal"
          activeClassName="active"
          className="nav-link"
          style={navLink}
        >
          <Button sx={buttonStyle} color="inherit">
            Calculate Stroke
          </Button>
        </NavLink>

        <NavLink
          to="/heart-disease"
          activeClassName="active" 
          className="nav-link"
        >
          <Button sx={buttonStyle} color="inherit">
            Heart Disease
          </Button>

        {/* Conditionally render the "Login" link */}
        {!isLoggedIn && (
          <NavLink to="/login" activeClassName="active" className="nav-link" style={navLink}>
            <Button sx={buttonStyle} color="inherit">
              Login
            </Button>
          </NavLink>
        )}

        {isLoggedIn && (
          <NavLink to="/logout" activeClassName="active" className="nav-link" style={navLink}>
          <Button sx={buttonStyle} color="inherit">
            Log out
          </Button>
        </NavLink>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
