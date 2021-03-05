import React,{useState} from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  ServiceLink,
} from './NavbarElements';
import './style.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Services from './Services';

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
          <NavLink className="service" to='/services'>
            Services
            <ul className="programminglanguage">
            <li ><NavLink to='/python'>Python</NavLink></li>
            <li ><NavLink to='/react'>React</NavLink></li>
            <li ><NavLink to='/.net'>.Net</NavLink></li>
            {/* <li><a class='linkcolor' href="">React</a></li>
            <li><a class='linkcolor' href="">.Net</a></li> */}


            </ul>
            

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