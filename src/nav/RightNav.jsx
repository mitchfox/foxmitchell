import React from 'react';
import styled from 'styled-components';
import '../styles/Nav.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

// Packages
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";


// Images

const Ul = styled.ul`
    text-align: left;
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    flex-flow: column nowrap;
    background: rgba( 0, 0, 0, 0.7 );
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    z-index: 18;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 0px;
    height: 100%;
    min-width: 300px;
    margin-top: 0px;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
`;

// https://nexo.io/ref/avlggq3sxy?src=web-link

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <div className='container'>
        <Row align="middle" justify="center">
          <Col>   <div className='menuItem'>
          <Link to="/home">Home</Link>
          </div></Col>
        </Row>
        <Row align="middle" justify="center">
          <Col>   <div className='menuItem'>
          <Link to="/projects">Projects</Link>
          </div></Col>
        </Row>
      </div>
    </Ul>
  )
}

export default RightNav