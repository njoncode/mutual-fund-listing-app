import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Gravatar  from 'react-gravatar';

import CustomButton from './CustomButton';
import '../styles/profileDropdown.scss';
import { createStructuredSelector } from 'reselect';
import {Dropdown, DropdownButton} from 'react-bootstrap';


import { signOutStartAction, toggleProfileDropdownHiddenAction } from '../redux/user/userActions';
import { selectCurrentUser, selectProfileDropdownHidden } from '../redux/user/userSelectors';

const ProfileDropdown = ({ currentUser, profileDropdownHiddenDispatch, signOutStartDispatch }) => {
    // connect passes dispatch into our components as a prop by default if we do not supply mapDispatchToProps as a second parameter to connect.
    
    return (
        // <div style={{ display: 'block', 
        //           width: 400, 
        //           padding: 30 }}>
        <div>
             {/* <Gravatar email={currentUser.email} size={40} onClick={() => profileDropdownHiddenDispatch()}/> */}
      <Dropdown>
        <Dropdown.Toggle variant="success">
        <Gravatar className='gravatr' email={currentUser.email} size={30} color='red'/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">
            Signed in as: {currentUser.email}
          </Dropdown.Item>
          <Dropdown.Item href="/edit-profile">
            Edit Profile
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Settings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#" onClick={signOutStartDispatch}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
    )
}
    
//     return (
//         <div className='profile-dropdown'>
//             <div className='profile-items'>
//                 <p> Signed is as: </p>
//                 <p>Edit Profile</p>
//             </div>
//         </div>
//     )
// }

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isProfileDropdownHidden: selectProfileDropdownHidden
  });

const mapDispatchToProps = dispatch => ({
signOutStartDispatch: () => dispatch(signOutStartAction()),
profileDropdownHiddenDispatch: () => dispatch(toggleProfileDropdownHiddenAction())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown));