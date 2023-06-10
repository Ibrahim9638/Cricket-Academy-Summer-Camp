import React from 'react';

import Banner from '../Banner/Banner';
import PopularClass from '../../PopularClass/PopularClass';
import useTitle from '../../../Hooks/useTitle';
import About from '../../About/About';


const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <About></About>
            
        </div>
    )
};

export default Home;