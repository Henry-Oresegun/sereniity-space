import React from 'react';
import{ images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
};


const Header = () => (
  
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
    
     <h1 className='app__header-h1'>Greenhithe,UK</h1>
     <SubHeading title=' 3 bedrooms / 3 beds / 2 bathrooms / Kitchen / Family Room' />
     <p className='p__opensans' style={{margin: '2rem 0'}}>In a world where downtime is more wishful thinking than reality, it’s essential that where you lay your head to rest, offers true tranquility, space, and comfort.</p>
     <button type='button' className='custom__button' onClick={scrollToBottom}>Reserve</button>
      </div>
   
  <div className='app__wrapper_img'>
    <img src={images.airbnb} alt='header_img' />
  </div>
  </div>
);

export default Header;
