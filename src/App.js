import React from 'react';
import NavMenu from './components/NavMenu';
// import CardSlider from './components/CardSlider';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';

export default function App() {
    return (
        <>
            <NavMenu />
            <Banner />
            <AboutUs />
            {/* <CardSlider /> */}
        </>
    );
}
