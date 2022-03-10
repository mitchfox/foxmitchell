
import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';
import '../styles/Nav.css';

const StyledBurger = styled.div`
    width: 1.7rem;
    height: 1.7rem;
    z-index: 20;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: absolute;
    top: 0;
    right: 0;
    

  div {
    width: 1.7rem;
    height: 0.20rem;
    background-color: ${({ open }) => open ? '#c4c4c4' : '#ffffff'};
    border-radius: 3px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <StyledBurger open={open} className='burger'  onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav open={open} />
        </>
    )
}

export default Burger