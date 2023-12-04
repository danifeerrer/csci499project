import Main from './pages/Main.js'
import React from 'react';


import StrokeCal from './pages/StrokeCal.js'
import MRI from './pages/MRI.js'
import Navbar from "./components/Navbar.js";

import  { BrowserRouter as Router ,Routes, Route} from 'react-router-dom';   
import { Container } from '@mui/material';
import Footer from './pages/Footer.js';


function App() {
  return (
    <Router>
      <Navbar/>
        <Routes> 
          <Route path='/' element={<Main />} />
          <Route path='MRI' element={<MRI />} />
          <Route path='StrokeCal' element={<StrokeCal />} />
        </Routes>
    </Router>
    
  );
}

export default App;
