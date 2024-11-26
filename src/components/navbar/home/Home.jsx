import React from 'react';
import Header from './Header';
import Product from './Product';
import Slider from './Slider';
import Sections from './Sections';

const Home = () => {
    return (
        <div>
           <Header />
           <Sections />
           <Product />
           <Slider />
        </div>
    );
};

export default Home;