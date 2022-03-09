import React, { useState, useEffect, Component, useRef, useContext, input } from 'react';
import SwitchingMockups from './components/SwitchingMockups';

import './App.css';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { bounce, bounceInDown, bounceOutUp, headShake, jello } from 'react-animations';
import 'animate.css';
import Radium, { StyleRoot } from 'radium';

import Test1 from './assets/mockupImages/test1.svg';

function App() {
  return (
    <div className='app'>
      <div className='content'>
        <div className='container'>
          <p>hi</p>
            <Row className='rowContainer' justify="center" align="middle">
                <Col span={4} className={'mockupColumn1'}>
                    {/* <div style={styles.firstAppMockup} className='appImage1'></div> */}
                    <div className='appImage1'>
                        <img src={Test1} className='mockupImages'></img>
                    </div>
                </Col>
                <Col span={4} className={'mockupColumn2'}>
                    <div className='appImage2'>
                        <img src={Test1} className='mockupImages'></img>
                    </div>
                </Col >
                <Col span={4} className={'mockupColumn3'}>
                    <div className='appImage3'>
                        <img src={Test1} className='mockupImages'></img>
                    </div>
                </Col>
            </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
