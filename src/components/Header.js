import React from 'react';
import Gravatar  from 'react-gravatar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import '../styles/header.scss';

import { signOutStartAction } from '../redux/user/userActions';
import { selectCurrentUser } from '../redux/user/userSelectors';
import mfImage from '../images/mutual-fund.png';
import CustomButton from './CustomButton'

const Header = ({ currentUser, signOutStartDispatch }) => {

  return (
    <div className="header-container">
      <img className='mf-image' src={mfImage} alt='mutual-find-logo'/>
        { !currentUser 
         ? <Link to='/sign-in'><button className='btn-sign-in'>SignIn</button></Link>
         : (
              <div className='header-right-content'>
                 <Gravatar email='' size={40}/>
                 <button className='btn-sign-out' onClick={signOutStartDispatch}>SignOut</button>
              </div>
            )
        }
      </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  signOutStartDispatch: () => dispatch(signOutStartAction())
})

export default connect(mapStatetoProps, mapDispatchToProps)(Header);
