import React from 'react';
import NavMenu from './components/NavMenu';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import CardSlider from './components/CardSlider';
import WhyChooseUs from './components/WhyChooseUs';
import Review from './components/Reviews/Review';

export default function App() {
    return (
        <>
            <NavMenu />
            <Banner />
            <AboutUs />
            <CardSlider />
            <WhyChooseUs />
            <Review />
        </>
    );
}
