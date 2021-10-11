
import React from 'react';
import { useParams } from "react-router-dom"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import '../styles/editProfile.scss';

import UserImage from '../images/user.png'

import { editUserStartAction, editUserPasswordStartAction } from '../redux/user/userActions';
import { selectCurrentUser, selectUsersData } from '../redux/user/userSelectors';

const EditProfile = ({ currentUser, editUserStartDispatch, editUserPasswordStartDispatch }) => {

    const [editUserProfileData, setEditUserProfileData] = React.useState(currentUser);

    const [editUserPassword, setEditUserPassword] = React.useState({ currentPassword: '', newPassword: '', confirmNewPassword: '' });

    const { currentPassword, newPassword, confirmNewPassword } = editUserPassword;

    const { displayName, email, password } = editUserProfileData;

    const handleChange = (e) => {
        const { name, value } = e.target;
         if (name === 'currentPassword' || name === 'newPassword' || name === 'confirmNewPassword') {
             setEditUserPassword({...editUserPassword, [name]: value })
         } else {
             setEditUserProfileData({...editUserProfileData, [name]: value });
            }
    };

   const handleEditPersonalDetailsSubmit = (e) => {
        e.preventDefault();
        editUserStartDispatch(editUserProfileData);
   };

   const handlePasswordSubmit = (e) => {
        e.preventDefault();

            if (currentPassword !== password) {
                alert('Invalid Password. Try Again');
            } else if (newPassword !== confirmNewPassword) {
                alert('Passwords do not match');
            } else if (newPassword === currentPassword) {
                alert('New Password cannot be same as your old password.');
            } else {
                editUserPasswordStartDispatch(newPassword)
            } 
        };

    return (
        <div className="container rounded bg-white mt-5 mb-5">

            <form>

                <div className="row">

                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5" width="150px" src={UserImage}/>
                            <span className="font-weight-bold">{displayName}</span>
                            <span className="text-black-50">{email}</span>
                        </div>
                    </div>


                    <div className="col-md-5 border-right">

                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <label htmlFor='displayName' className="labels">Display Name</label>
                                    <input type="text" className="form-control" name='displayName' placeholder="display name" value={displayName} onChange={handleChange}/>
                                </div>
                                {/* <div className="col-md-6">
                                    <label className="labels">Last Name</label>
                                    <input type="text" className="form-control" name='lastName' value='' placeholder="Last Name"/>
                                </div> */}
                            </div>
                    
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label className="labels">Email</label>
                                    <input type="text" className="form-control" placeholder="country" value={email}/>
                                </div>
                            </div>

                            <div className="mt-5 text-center">
                                <button className="btn btn-primary profile-button" type="submit" onClick={handleEditPersonalDetailsSubmit}>Save Profile</button>
                            </div>

                            <div className='change-password-container'>

                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Change Password</h4>
                                </div>
                        
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label htmlFor='currentPassword' className="labels">Current Password</label>
                                        <input type="password" className="form-control" name='currentPassword' placeholder="••••••" value={currentPassword} onChange={handleChange}/>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label htmlFor='newPassword' className="labels">New Password</label>
                                        <input type="password" className="form-control" name='newPassword' placeholder="••••••" value={newPassword} onChange={handleChange}/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor='confirmNewPassword' className="labels">Confirm New Password</label>
                                        <input type="password" className="form-control" name='confirmNewPassword' value={confirmNewPassword} placeholder="••••••" onChange={handleChange}/>
                                    </div>
                                </div>

                                <div className="mt-5 text-center">
                                    <button className="btn btn-primary profile-button" type="submit" onClick={handlePasswordSubmit} disabled={!currentPassword || !newPassword || !confirmNewPassword}>Update Password</button>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </form>
        </div>
    )
};

const mapStatetoProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    usersData: selectUsersData
  });

const mapDispatchToProps = dispatch => ({
    editUserStartDispatch: (data) => dispatch(editUserStartAction(data)),
    editUserPasswordStartDispatch: data => dispatch(editUserPasswordStartAction(data))
});


export default connect(mapStatetoProps, mapDispatchToProps)(EditProfile);


