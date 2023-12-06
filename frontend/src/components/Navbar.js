import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, NavLink as Router } from 'react-router-dom'; // Import Link
import logo from '../data/logo.png';

const Navbar = () => {
  const navBarStyle = {
    position: 'fixed',
    background: '#2c3e50'
    ,
  };


  const navLink ={
    textDecoration:'none',



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
    ":focus":{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  };

  return (
    <AppBar sx={navBarStyle}>
      <Toolbar >
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

        <NavLink to="/code" activeClassName="active" className="nav-link" style={navLink}
>
  <Button sx={buttonStyle} color="inherit">
    code
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
