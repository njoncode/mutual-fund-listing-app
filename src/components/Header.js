import React from 'react';
import Gravatar  from 'react-gravatar';
import { Link } from 'react-router-dom';

import '../styles/header.scss';

import mfImage from '../images/mutual-fund.png';

const Header = () => {

  return (
    <div className="header-container">
      <img className='mf-image' src={mfImage} alt='mutual-find-logo'/>
      <div className='header-right-content'>
        <Gravatar email='' size={40}/>
        <Link className='link-sign-in' to='/sign-in'>SignIn</Link>
      </div>
    </div>
  );
};

export default Header;
