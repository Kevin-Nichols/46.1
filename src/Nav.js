import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Nav.css";

function Nav() {
  return (
    <nav className='Nav'>
      <NavLink to="/" className='Nav-Link'>
        Home
      </NavLink>
      <NavLink to="/pepsi" className='Nav-Link'>
        Pepsi
      </NavLink>
      <NavLink to="/diet" className='Nav-Link'>
        Diet Pepsi
      </NavLink>
      <NavLink to="/water" className='Nav-Link'>
        Aquafina
      </NavLink>
      <NavLink to="/mountain-dew" className='Nav-Link'>
        Mountain Dew
      </NavLink>
    </nav>
  );
}

export default Nav;