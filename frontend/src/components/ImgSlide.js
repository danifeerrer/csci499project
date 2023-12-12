import React from 'react'
import Item from './Item'
import slider from "../data/slider.json"
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

function Slide() {
    
    const Paperstyle ={
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position :"fixed",


    }
  
    return (
    <Paper style={{boxShadow: "none",
    marginTop:'80px',
    marginLeft:'30px',
    marginRight:'30px'}}>
        <Carousel style={Paperstyle}>
            {
                slider.map(item => <Item key={item.id} item={item} /> )
                
            } 
        </Carousel>
    </Paper>

    )
}

export default Slide

