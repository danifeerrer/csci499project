import React from 'react'
import { Paper, Button } from '@mui/material'
import { Link } from 'react-router-dom';

function Item({item})
{   const paperStyle = {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow: "none"
    
    }
    const imageContainer ={
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };
    
    const img ={
        width: '75%',
        height: '100%',
        objectFit: 'cover',
        marginRight:'0',
      };
      
    const title= {
        marginTop: '20px',
        marginRight:'20px',
        marginLeft:'20px',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: '1.0rem',
        
        
        
        
      };
    const buttonStyle = {
        backgroundColor: '#0073e6',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '1.2rem',


        
  };
  
    return (
        <Paper style={paperStyle}>
           
                <img src={item.image} alt={item.title} style={img} />
            
            
            <div style={title}>
            <h2>{item.title}</h2>
            <Link to={item.path} style={{textDecoration:'none'}}> 
            <Button style={buttonStyle}  >
                {item.buttonLabel}
            </Button>
            </Link>
            </div>
            
        </Paper>
    )
}

export default Item