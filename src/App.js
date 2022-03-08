import React, { useState, useEffect, Component, useRef, useContext, input } from 'react';
import SwitchingMockups from './components/SwitchingMockups';

import './App.css';



function App() {
  return (
    <div className='app'>
      <div className='content'>
        <SwitchingMockups />
      </div>
    </div>
  );
}

export default App;
