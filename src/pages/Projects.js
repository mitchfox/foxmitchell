import React, { useState, useEffect, Component, useRef, useContext, input } from 'react';

import '../styles/Projects.css';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

// Project Images
import CryptoProphets from '../assets/projectImages/cryptoprophetpreviewsmall';
import Argonaut from '../assets/projectImages/argonaut.png';

function Projects() {
  return (
    <div className='projects'>
      <Row className='projectRows'>
        <Col span={9} justify="center" align="left" className="boxContainer">
          <div className='projectContainer'>
            <p className='projectTitles'>Crypto Prophets | React Web App</p>
            <p className='projectBios'>Cryptocurrency Analytics Calculator using Coingeckos API's Data Feeds</p>
            <a><p className='projectBios'>Github</p></a>
          </div>
          <div style={{ marginTop: '0px' }}>
            <img src={CryptoProphets} className='projectImageStyles' />
          </div>
        </Col>


        <Col span={9} justify="center" align="left" className="boxContainer">
          <div className='projectContainer'>
            <p className='projectTitles'>Argonaut | React Native App</p>
            <p className='projectBios'>A Writers Travel Journal allowing Users to Create 
            Minimalist Compositions that are subsequentially Mapped using user geometrics
            </p>
          </div>
          <div style={{ marginTop: '0px' }}>
            <img src={Argonaut} className='projectImageStyles' />
          </div>
        </Col>




      </Row>



    </div>
  );
}

export default Projects;