import React, { useState, useEffect, Component, useRef, useContext, input } from 'react';
import '../styles/SwitchingMockups.css';

// Packages 
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { bounce, bounceInDown, bounceOutUp, headShake, jello } from 'react-animations';
import 'animate.css';
import Radium, { StyleRoot } from 'radium';

// 3 App Mockups with Interchanging Images. Subtle Animations. Infinite. Pause on Hover


const SwitchingMockups = () => {
    return (

        <Row className='rowContainer' align="middle" justify="center">
            <Col span={4} className={'mockupColumn1'}>
                {/* <div style={styles.firstAppMockup} className='appImage1'></div> */}
                <div className='appImage1'></div>
            </Col>
            <Col span={4} className={'mockupColumn2'}>
                <div className='appImage2'></div>
            </Col >
            <Col span={4} className={'mockupColumn3'}>
                <div className='appImage3'></div>
            </Col>
        </Row>

    )
}

export default SwitchingMockups;
