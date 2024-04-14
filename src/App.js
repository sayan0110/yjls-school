import React from "react";
import NavMenu from "./components/NavBar/NavMenu";
import Banner from "./components/Banner/Banner";
import AboutUs from "./components/About/AboutUs";
import CardSlider from "./components/CardSlider/CardSlider";
import Review from "./components/Reviews/Review";
import Course from "./components/Courses/Course";
import Popularity from "./components/Popularity/Popularity";
import WhyUs from "./components/WhyChoose/WhyUs";
import Footer from "./components/Footer/Footer";
import Hall from "./components/Hall-of-fame/Hall";
import Contactme from "./components/Contact-me/Contactme";
import "./app.css";

import background from "./components/A_media/Background/site-bg1.jpg";
import visaBanner from './components/A_media/visa.mp4';

const Visa = () => {
  return (
    <div className="visa-section">
      <video autoPlay loop muted className="visa-video">
        <source src={visaBanner} type="video/mp4"/>
      </video>
    </div>
  );
}

const App = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <img src={background} alt="bg" className="bg-style" />
      <NavMenu />
      <Banner />
      <AboutUs />
      <CardSlider />
      <div className="border-style"></div>
      <Hall />
      <div className="border-style"></div>
      <Course />
      <div className="border-style"></div>
      <Visa />
      <div className="border-style"></div>
      <WhyUs />
      <div className="border-style"></div>
      <Popularity />
      <div className="border-style"></div>
      <Review />
      <div className="border-style"></div>
      <Contactme />
      <div className="border-style"></div>
      <Footer />
      <div className="border-style"></div>
      <div className="copy-right-style">
        <h5 className="h5-style">© {year} YJLS.com All rights reserved.</h5>
        <p className="p-style">The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>
      </div>
    </>
  );
};

export default App;
