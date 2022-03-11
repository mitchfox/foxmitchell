import React, { useState, useEffect, Component, useRef, useContext, input } from 'react';

import '../styles/Projects.css';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

// Project Images
import CryptoProphets from '../assets/projectImages/cryptoprophetpreviewsmall';

function Projects() {
  return (
    <div className='projects'>

      <Row className='rows'>
        <Col span={4} className='projectDiv'>
          <img src={CryptoProphets} className='projectImageStyles'/>
          </Col>
        <Col span={4} className='projectDiv'>2</Col>
        <Col span={4} className='projectDiv'>3</Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>


    </div>
  );
}

export default Projects;