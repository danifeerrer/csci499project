import React from 'react';
import { NavLink } from 'react-router-dom';
<<<<<<< HEAD
import { AppBar, Toolbar, Button } from '@mui/material';
import logo from '../components/images/logo.png';
=======
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, NavLink as Router } from 'react-router-dom'; // Import Link
import logo from '../data/logo.png';
>>>>>>> branch-1

const Navbar = () => {
  const navBarStyle = {
    position: 'fixed',
<<<<<<< HEAD
    left: 0,
    right: 0,
    top: 0,
    background: '#2c3e50',
=======
    background: '#2c3e50'
  };

  const navLink = {
    textDecoration: 'none',
>>>>>>> branch-1
  };

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#ecf0f1',
    marginLeft: '30px', // Adjust the left margin
    marginRight: '50px', // Adjust the right margin
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
<<<<<<< HEAD
        <NavLink to="/" activeClassName="active" className="nav-link">
=======
        <NavLink
          to="/"
          activeClassName="active"
          className="nav-link"
          style={navLink}
        >
>>>>>>> branch-1
          <Button sx={buttonStyle} color="inherit">
            Home
          </Button>
        </NavLink>

        <NavLink to="/code" activeClassName="active" className="nav-link" style={navLink}>
          <Button sx={buttonStyle} color="inherit">
            CNN Code
          </Button>
        </NavLink>

<<<<<<< HEAD
        <NavLink to="/MRI" activeClassName="active" className="nav-link">
=======
        {/* Conditionally render the "Login" link */}
        {!isLoggedIn && (
          <NavLink to="/login" activeClassName="active" className="nav-link" style={navLink}>
            <Button sx={buttonStyle} color="inherit">
              Login
            </Button>
          </NavLink>
        )}

        <NavLink
          to="/MRI"
          activeClassName="active"
          className="nav-link"
          style={navLink}
        >
>>>>>>> branch-1
          <Button sx={buttonStyle} color="inherit">
            MRI
          </Button>
        </NavLink>
<<<<<<< HEAD
        <NavLink to="/StrokeCal" activeClassName="active" className="nav-link">
=======
        <NavLink
          to="/StrokeCal"
          activeClassName="active"
          className="nav-link"
          style={navLink}
        >
>>>>>>> branch-1
          <Button sx={buttonStyle} color="inherit">
            Calculate Stroke
          </Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;