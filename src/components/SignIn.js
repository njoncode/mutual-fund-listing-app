import React, {useState} from 'react';
import { connect } from 'react-redux';

import '../styles/signIn.scss';

import FormInput from './FormInput';
import CustomButton from './CustomButton';

const SignIn = () => {
   
    const [userCredentials, setCredentials] = useState({ 
        email: '', 
        password: ''
    });

    const { email, password } = userCredentials;

    const handleOnChange = event => {

        const {value, name} = event.target;

        setCredentials({ ...userCredentials, [name]: value })
    };

    const handleSubmit = async event => {
        event.preventDefault();

       
    };

    return (
        <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
    
        <form onSubmit={handleSubmit}>
            <FormInput
                name='email' 
                type='email' 
                handleChange={handleOnChange}
                value={email} 
                label='Email'
                required 
            />
            <FormInput
                name='password' 
                type='password' 
                value={password} 
                handleChange={handleOnChange}
                label='Password'
                required 
            />
            <div className='buttons'>
                <CustomButton type='submit'>Sign in</CustomButton >
            </div>¯
        </form>
    </div>
    )
};

const mapDispatchToProps = dispatch => ({
    // emailSignInStartDispatch: (email, password) => dispatch(emailSignInStartAction({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn); 
