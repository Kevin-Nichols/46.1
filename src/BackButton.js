import React from 'react';
import { Link } from 'react-router-dom';
import "./BackButton.css";

function BackButton() {
  return (
    <nav className='Back'>
      <Link to="/" className='Back-Link'>
        Back
      </Link>
    </nav>
  );
}

export default BackButton;