import React from 'react';
import './home.css';
import ImageGallery from './imageGallery';

import Header from '../header/header';

const Home = () => {
  
  return (
    <div className="container">
      <div>
        <Header/>
        <ImageGallery/>   
      </div>
      <div className="container">
        
      </div>
    </div>
  )
}

export default Home;