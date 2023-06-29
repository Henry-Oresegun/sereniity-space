import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi' ;
import { MdHome } from 'react-icons/md';

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return(
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
    <img src={images.logo} alt='app logo' />
    </div>
    <ul className='app__navbar-links'>
    <li className='p__opensans-navbar'><a href='#Home'>Introducing the utmost in luxury living</a> </li>
    </ul>
    <div className='app__navbar-locations'>
    <a href='Locations' className='p__opensans-navbar'> Locations </a>
    <div />
    </div>
    <div className='app_navbar-smallscreen'>
      <GiHamburgerMenu color='#3A3136' fontSize={27} onClick={() => setToggleMenu(true)}/> 

     {toggleMenu&& (
      <div className='app__navbar-smallscreen_overlay flex_center slide-bottom'>
       <MdHome fontSize={27}  className='overlay__close' onClick={() => setToggleMenu(false) }/>
       <ul className='app__navbar-smallscreen_links'>
       <li className='p__opensans'><a href='#Greenhithe'>Greenhithe</a> </li>
       <li className='p__opensans'><a href='#Barking'>Barking </a> </li>
       <li className='p__opensans'><a href='#Dagenham'>Dagenham </a> </li>
       <li className='p__opensans'><a href='#Dartford'>Dartford</a> </li>
       <li className='p__opensans'><a href='#Chatham'>Chatham</a> </li>
      </ul>
      </div>
      )}
    
    </div>
    
    
  </nav>
  )
  }; 

export default Navbar;