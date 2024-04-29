import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Presentation from '../components/Presentation';
import Aboutme from '../components/Aboutme';


const Home = () => {
    return (
        <div>
            <Navigation />
            <Presentation />
            <Aboutme />
            <Footer />
        </div>
    );
};

export default Home;