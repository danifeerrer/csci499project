import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import logo from '../data/logo.png';

const Navbar = () => {
  const navBarStyle = {
    position: 'fixed',
    background: '#2c3e50',

  };

  const navLink = {
    textDecoration: 'none',
  };

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '"BM Dohyeon"',
    fontSize: '18px',
    fontWeight: '900',
    color: '#ecf0f1',
    margin: 'auto',
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
        <img src={logo} width="420px" height='auto' alt="Logo"  />
        

        <Box       
         marginLeft='auto'
         marginRight='20px'
         display= 'flex'
         
        >

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

        <NavLink to="/model-explanation" activeClassName="active" className="nav-link"  style={navLink}>
  <Button sx={buttonStyle} color="inherit">
    How It Works
  </Button>
</NavLink>



 

        {isLoggedIn && (
          <NavLink to="/logout" activeClassName="active" className="nav-link" style={navLink}>
          <Button sx={buttonStyle} color="inherit">
            Log out
          </Button>
        </NavLink>
        )}

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
          style={navLink}
        >
          <Button sx={buttonStyle} color="inherit" >
            Heart Disease
          </Button>
        </NavLink>

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

    </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;