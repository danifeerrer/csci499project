import React from 'react';
import  { BrowserRouter as Router ,Routes, Route} from 'react-router-dom';   


import Main from './components/Main.js'
import StrokeCal from './components/StrokeCal.js'
import MRI from './components/MRI.js'
import Navbar from "./components/Navbar.js";
import Footer from './components/Footer.js';
import Jupyter from './components/Jupyter.js';


function App() {
  return (
    <Router>
      <Navbar/>
        <Routes> 
          <Route path='/' element={<Main />} />
          <Route path='MRI' element={<MRI />} />
          <Route path='StrokeCal' element={<StrokeCal />} />
          <Route path='Code' element={<Jupyter />} />
        </Routes>
    </Router>
    
  );
}

export default App;
