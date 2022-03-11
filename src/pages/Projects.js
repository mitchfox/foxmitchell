import React, { useState, useEffect, Component, useRef, useContext, input } from 'react';

import '../styles/Projects.css';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

// Project Images
import CryptoProphets from '../assets/projectImages/cryptoprophetpreviewsmall';

function Projects() {
  return (
    <div className='projects'>
      <Row className='rows' >
        <Col span={4} className='projectDiv'>
          <p className='projectTitles'>Crypto Prophets | React Web App</p>
          <p className='projectBios'>Cryptocurrency Analytics Calculator using Coingeckos API's Data Feeds</p>
          <img src={CryptoProphets} className='projectImageStyles' />
        </Col>
        <Col span={4} className='projectDiv'>
          <p className='projectTitles'>Argonaut | React Native App</p>
          <p className='projectBios'>Travel Journal that Incoporates Writing and Geolocation Mapping the Users Compositions</p>
          <img src={CryptoProphets} className='projectImageStyles' />
        </Col>
        <Col span={4} className='projectDiv'>
          <p className='projectTitles'>Crypto Prophets | React Web App</p>
          <p className='projectBios'>Cryptocurrency Analytics Calculator using Coingeckos API's Data Feeds</p>
          <img src={CryptoProphets} className='projectImageStyles' />
        </Col>
      </Row>
      <Row className='rows' >
        <Col span={4} className='projectDiv'>
          <p className='projectTitles'>Crypto Prophets | React Web App</p>
          <p className='projectBios'>Cryptocurrency Analytics Calculator using Coingeckos API's Data Feeds</p>
          <img src={CryptoProphets} className='projectImageStyles' />
        </Col>
        <Col span={4} className='projectDiv'>
          <p className='projectTitles'>Crypto Prophets | React Web App</p>
          <p className='projectBios'>Cryptocurrency Analytics Calculator using Coingeckos API's Data Feeds</p>
          <img src={CryptoProphets} className='projectImageStyles' />
        </Col>
        <Col span={4} className='projectDiv'>
          <p className='projectTitles'>Crypto Prophets | React Web App</p>
          <p className='projectBios'>Cryptocurrency Analytics Calculator using Coingeckos API's Data Feeds</p>
          <img src={CryptoProphets} className='projectImageStyles' />
        </Col>
      </Row>


    </div>
  );
}

export default Projects;