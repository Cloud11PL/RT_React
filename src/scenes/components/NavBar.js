import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';


export default function NavBar() {
  return (
    <nav className="navbar">
      <p className="navbar_title">SWAPI App</p>
      <div className="navbar_links"> 
        <NavLink className="navlink" to="/" exact>
          Home
        </NavLink>
        <NavLink className="navlink" to="/about">
          About
        </NavLink>
        <NavLink className="navlink" to="/contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );  
}
