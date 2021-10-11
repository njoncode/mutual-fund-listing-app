import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../images/404.jpg';
import '../styles/notFoundPage.scss'
import CustomButton from './CustomButton';

const NotFoundPage = () => {
        return (
        <div className='not-found'>
            <img className='page-not-found' src={PageNotFound} alt='No page found' />
            <CustomButton className='link-go-home'>
              <Link className='btn-page-not-found' to="/">Go to Home </Link>
            </CustomButton>
          </div>
        )
    }

export default NotFoundPage;