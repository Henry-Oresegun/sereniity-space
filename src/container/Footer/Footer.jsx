import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import {FaPaypal, FaTiktok} from 'react-icons/fa'

import { FooterOverlay, Enquire } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="enquire">
    <FooterOverlay />
    <Enquire />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">info@serenityspaceluxuryhomes.com</p>
        <p className="p__opensans">07854090571</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo} alt="footer_logo" />
        <div className="app__footer-links_icons">
          <FaPaypal />
          <a href="https://www.instagram.com/serenity_space_luxury_homes/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer">
          <FiInstagram />
          </a>
          <FaTiktok />
        </div>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Serenity Space Luxury Homes.</p>
    </div>

  </div>
);

export default Footer;