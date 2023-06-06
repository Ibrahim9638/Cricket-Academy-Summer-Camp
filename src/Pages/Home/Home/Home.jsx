import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <h1 className='text-white'>Home</h1>
            <Footer></Footer>
        </div>
    );
};

export default Home;