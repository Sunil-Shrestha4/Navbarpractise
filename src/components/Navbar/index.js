import React,{useState} from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
    
    const[text,setText] = useState();

    const handleclick =() =>{
        setText('hello world')
    }
  return (
    <>
    
      <Nav>
        <NavLink to='/'>
          <h1>logo</h1>
        </NavLink>
    
        <NavMenu>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/services' >
            Services
          </NavLink>
          <NavLink to='/contact-us' >
            Contact Us
          </NavLink>
          <NavLink to='/sign-up'>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        
        <NavBtn onClick={handleclick}>
          <NavBtnLink to=''>Hello</NavBtnLink>
        </NavBtn>
        </NavMenu>
      </Nav>
      {text}
    </>
  );
};

export default Navbar;