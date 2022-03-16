import React, { useState, useEffect, Component, useRef, useContext, input } from 'react';

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

// TODO
// Add svg logo animation
// Add fade in for each div


function App() {
  return (
    <div>
       <div className='appStyleBar'></div>
      <Home />
      <Projects />
    </div>
  );
}

export default App;
