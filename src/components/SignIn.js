import React, {useState} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useToasts } from 'react-toast-notifications';

import '../styles/signIn.scss';

import { signInStartAction } from '../redux/user/userActions';
import { selectIsLoading, selectIsSuccess, selectFailureMessage } from '../redux/user/userSelectors';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import Loader from './Loader';


const SignIn = ({ emailSignInStartDispatch, isLoading, isSuccess, failureMessage }) => {
   
    const { addToast } = useToasts();

    React.useEffect(() => {
        if (isSuccess) {
          addToast('Welcome to dashboard!', {
            appearance: 'success',
            autoDismiss: true,
          });
        }
        if (failureMessage && failureMessage.length > 0) {
          addToast(failureMessage, {
            appearance: 'error',
            autoDismiss: true,
          });
        }
      }, [isSuccess, failureMessage]);

      
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

        emailSignInStartDispatch(email, password)
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
                <CustomButton type='submit'>{isLoading ? <Loader text='Signing In'/> : 'Sign in'}</CustomButton >
            </div>¯
        </form>
    </div>
    )
};

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsLoading,
    isSuccess: selectIsSuccess,
    failureMessage: selectFailureMessage
  });

const mapDispatchToProps = dispatch => ({
    emailSignInStartDispatch: (email, password) => dispatch(signInStartAction({ email, password }))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn); 
