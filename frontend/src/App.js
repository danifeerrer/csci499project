import React from 'react';
import  { BrowserRouter as Router ,Routes, Route} from 'react-router-dom';   


import Main from './components/Main.js'
import StrokeCal from './components/StrokeCal.js'
import MRI from './components/MRI.js'
import Navbar from "./components/Navbar.js";
import Footer from './components/Footer.js';
import Jupyter from './components/Jupyter.js';
import AccountCreation from './components/AccountCreation.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import ModelExplanation from './components/ModelExplanation.js'; 
import HeartDisease from './components/HeartDisease.js'; 


function App() {
  return (
    <Router>
      <Navbar/>
        <Routes> 
          <Route path='/' element={<Main />} />
          <Route path='MRI' element={<MRI />} />
          <Route path='StrokeCal' element={<StrokeCal />} />
          <Route path='Code' element={<Jupyter />} />
          <Route path='Login' element={<Login />} />
          <Route path='AccountCreation' element={<AccountCreation />} />
          <Route path='Logout' element={<Logout />} />
          <Route path="/model-explanation" element={<ModelExplanation />} />
          <Route path="/heart-disease" element={<HeartDisease />} />
        </Routes>
    </Router>
    
  );
}

export default App;
