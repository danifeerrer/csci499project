import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#f0f0f0',
        padding: '10px',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 1000, 
      }}
    >
      <p>DISCLAIMER: We are not medical professionals, nor do we claim to be. If you are unsure about the results of our machine learning model, please consult an appropriate medical professional.</p>
    </footer>
  );
};

export default Footer;
