import React from 'react';

import Banner from '../Banner/Banner';
import PopularClass from '../../PopularClass/PopularClass';
import useTitle from '../../../Hooks/useTitle';
import About from '../../About/About';
import PopularInstructor from '../../PopularInstructor/PopularInstructor';


const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            
        </div>
    )
};

export default Home;