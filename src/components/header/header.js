import React from 'react';
import './header.css'
import logo from '../../upload/image/logo.png';

const Header = () => {
  return (
    <div className="container">
      <nav>
      <p>Explore your life with travelling...</p>
        <img 
          src={logo}
          style={{
            width:100,
            height: 100,
            borderRadius: 10,
            paddingBottom: 30
          }}
        />
        <ul>
          <li><a href="/">LogIn</a></li>
        </ul>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Tour</a></li>
          <li><a href="/">Tour</a></li>
        </ul>
        
      </nav>
    </div>
    
  )
}

export default Header;
// https://www.youtube.com/watch?v=MLfAW55_4cY
// className="link link1"