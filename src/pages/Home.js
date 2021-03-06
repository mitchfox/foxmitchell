import React, { useState, useEffect, Component, useRef, useContext, input } from 'react';

import '../styles/Home.css';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { bounce, bounceInDown, bounceOutUp, headShake, jello } from 'react-animations';
import 'animate.css';
import Tilt from 'react-tilt'
import Radium, { StyleRoot } from 'radium';


// Images
import Test1 from '../assets/mockupImages/test1.svg';
import Argonaut from '../assets/mockupImages/argonaut.svg';
import Argonaut3 from '../assets/mockupImages/argonaut3.svg';
import CryptoProphets from '../assets/mockupImages/cryptoprophets.svg';
import ReactImage from '../assets/projectImages/logo192.png';

function Home() {
    return (
        <div className='home'>
            <div className='container'>

                <Row className='rowContainer' justify="center" align="middle">

                    <Col span={4} className={'mockupColumn1'}>
                        {/* <div style={styles.firstAppMockup} className='appImage1'></div> */}
                        <div className='appImage1'>

                            <img src={Argonaut} className='mockupImages'></img>
                        </div>
                    </Col>
                    <Col span={4} className={'mockupColumn2'}>
                        <div className='appImage2'>
                            <img src={CryptoProphets} className='mockupImages'></img>
                        </div>
                    </Col >
                    <Col span={4} className={'mockupColumn3'}>
                        <div className='appImage3'>
                            <img src={Argonaut3} className='mockupImages'></img>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='textContainer'>
                <h1 id='reactNinja'>Need a<br />
                    <img src={ReactImage} className="reactImageLogo" />React Ninja?</h1>

                <p id='bio'>Hi 👋 &nbsp;I'm Mitch, an Australian developer based in the UK who specialises in React,
                    JavaScript and starting side projects before finishing old ones.
                    <br /><br />
                    As this is essentially my resume, I could go on to write something extremely pretentious highlighting
                    how badass my coding and design skills are... but I won't...
                    <br /><br />
                    Instead I'll just let my projects do the talking for me! You can check them out below 👇</p>
            </div>
        </div>
    );
}

export default Home;
