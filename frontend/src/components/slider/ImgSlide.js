import React from 'react'
import Item from './Item'
import slider from "./slider.json"
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
    <Paper>
        <Carousel style={Paperstyle}>
            {
                slider.map(item => <Item key={item.id} item={item} /> )
                
            } 
        </Carousel>
    </Paper>

    )
}

export default Slide

