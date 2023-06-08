import React from 'react';

import Banner from '../Banner/Banner';
import PopularClass from '../../PopularClass/PopularClass';
import useTitle from '../../../Hooks/useTitle';


const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            
        </div>
    )
};

export default Home;