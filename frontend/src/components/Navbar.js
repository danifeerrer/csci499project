import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, AppBar, Toolbar, Button } from '@mui/material';
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
    margin: '10px',
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
          className="nav-link"
          style={navLink}
  
        >
          <Button sx={buttonStyle} color="inherit" >
            Home
          </Button>
        </NavLink>

        <NavLink to="/model-explanation"  className="nav-link"  style={navLink}>
  <Button sx={buttonStyle} color="inherit">
   models
  </Button>
</NavLink>

        <NavLink
          to="/MRI"
        
          className="nav-link"
          style={navLink}
        >
          <Button sx={buttonStyle} color="inherit">
            Brain Tumor
          </Button>
        </NavLink>
        <NavLink
          to="/StrokeCal"
 
          className="nav-link"
          style={navLink}
        >
          <Button sx={buttonStyle} color="inherit">
            Stroke Risk
          </Button>
        </NavLink>

        <NavLink
          to="/heart-disease"
        
          className="nav-link"
          style={navLink}
        >
          <Button sx={buttonStyle} color="inherit" >
            Heart Disease
          </Button>
        </NavLink>

        {/* Conditionally render the "Login" link */}
        {!isLoggedIn && (
          <NavLink to="/login"  className="nav-link" style={navLink}>
            <Button sx={buttonStyle} color="inherit">
              Login
            </Button>
          </NavLink>
        )}

        {isLoggedIn && (
          <NavLink to="/logout" className="nav-link" style={navLink}>
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