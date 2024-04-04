import React from 'react';
import NavMenu from './components/NavMenu';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import CardSlider from './components/CardSlider';

export default function App() {
    return (
        <>
            <NavMenu />
            <Banner />
            <AboutUs />
            <CardSlider />
        </>
    );
}
