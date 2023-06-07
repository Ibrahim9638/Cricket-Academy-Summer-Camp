import React from 'react';
import { Link } from 'react-router-dom';
import errorPage from '../assets/error/errorPage.jpg' 

const ErrorPage = () => {
    return (
        <div className='w-1/2 mx-auto'>
            <img src={errorPage} alt="" />
            <h1 className='text-red-700 font-extrabold text-4xl lg:ml-32 mb-8'>The Result Not Found</h1>
            <Link to='/' className='underline text-xl lg:ml-60 text-primary'>Back to Home</Link>
        </div>
    );
};

export default ErrorPage;