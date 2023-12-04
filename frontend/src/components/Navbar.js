import React from 'react'
import { AppBar,Toolbar,Typography, Button } from '@mui/material'
import  { BrowserRouter ,Routes, Route, Link, NavLink as Router} from 'react-router-dom';   
import logo from '../components/slider/logo.png';
import { margin } from '@mui/system';

const Navbar = () => {

  return (
        <AppBar 
            sx={{background:'lightBlue' ,
                 position: 'relative',
                 margin: 'auto',

                }}>
            <Toolbar>
                <img src={logo} width="100px" />
                <Button sx={{fontFamily:'Raleway',fontSize:"18px", fontWeight:'bold',color:'#404040', marginLeft: 'auto',":hover": {bgcolor: "orange", color: "white" }}} color="inherit" component={Router} to="/">How it Works</Button>
                <Button sx={{fontFamily:'Raleway',fontSize:"18px", fontWeight:'bold',color:'#404040', marginLeft: "10px",":hover": {bgcolor: "orange", color: "white" }}} color="inherit" component={Router} to="/MRI">MRI</Button>
                <Button sx={{fontFamily:'Raleway',fontSize:"18px", fontWeight:'bold',color:'#404040', marginLeft: "10px",":hover": {bgcolor: "orange", color: "white" } }} color="inherit" component={Router} to="/StrokeCal" >Calculate Stroke</Button>

            </Toolbar>  
        </AppBar>

    )
}

export default Navbar