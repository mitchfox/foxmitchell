import React, { useState, useEffect, Component, useRef, useContext, input } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import './App.css';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { bounce, bounceInDown, bounceOutUp, headShake, jello } from 'react-animations';
import 'animate.css';
import Radium, { StyleRoot } from 'radium';

// Pages 
import Navbar from './nav/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';

// Images
import Test1 from './assets/mockupImages/test1.svg';
import Argonaut from './assets/mockupImages/argonaut.svg';
import CryptoProphets from './assets/mockupImages/cryptoprophets.svg';

function App() {
  return (
    <div>
       <div className='appStyleBar'></div>
      <Home />
      <Projects />
    </div>
    // <BrowserRouter>
    //   <div>
        
    //    <div className='appStyleBar'></div>
    //    {/* Navigation */}
    //     <Navbar />
    // </div>
    //   <Routes>
    //     <Route path="/foxmitchell/" element={<Home />} />
    //     <Route path="/foxmitchell/projects" element={<Projects />} />
    //   </Routes>
    // </BrowserRouter>

  );
}

export default App;
