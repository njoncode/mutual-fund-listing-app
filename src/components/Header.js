import React from 'react';
import Gravatar  from 'react-gravatar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import '../styles/header.scss';

import { signOutStartAction, toggleProfileDropdownHiddenAction } from '../redux/user/userActions';
import { selectCurrentUser, selectProfileDropdownHidden } from '../redux/user/userSelectors';
import mfImage from '../images/mutual-fund.png';
import ProfileDropdown from './ProfileDropdown';

const Header = ({ currentUser, signOutStartDispatch, profileDropdownHiddenDispatch, isProfileDropdownHidden }) => {

  return (
    <div className="header-container">
      <img className='mf-image' src={mfImage} alt='mutual-find-logo'/>
        { !currentUser 
         ? <Link to='/sign-in'><button className='btn-sign-in'>SignIn</button></Link>
         : (
              <div className='header-right-content'>
                 {/* <Gravatar email={currentUser.email} size={40} onClick={() => profileDropdownHiddenDispatch()}/> */}
                 {/* <button className='btn-sign-out' onClick={signOutStartDispatch}>SignOut</button> */}
                 {isProfileDropdownHidden ? null : <ProfileDropdown />}
              </div>
            )
        }
      </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isProfileDropdownHidden: selectProfileDropdownHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStartDispatch: () => dispatch(signOutStartAction()),
  profileDropdownHiddenDispatch: () => dispatch(toggleProfileDropdownHiddenAction())
})

export default connect(mapStatetoProps, mapDispatchToProps)(Header);
