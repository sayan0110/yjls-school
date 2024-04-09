import React from "react";
import NavMenu from "./components/NavBar/NavMenu";
import Banner from "./components/Banner/Banner";
import AboutUs from "./components/About/AboutUs";
import CardSlider from "./components/CardSlider/CardSlider";
import Review from "./components/Reviews/Review";
import Course from "./components/Courses/Course";
// eslint-disable-next-line
import Popup from "./components/Popup/Popup";
import Popularity from "./components/Popularity/Popularity";
import WhyUs from "./components/WhyChoose/WhyUs";
import Footer from "./components/Footer/Footer";

import Background from "./components/A_media/Background/site-bg1.jpg";

import "./app.css";

const App = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <img src={Background} alt="bg" className="bg-style" />
      {/* <Popup /> */}
      <NavMenu />
      <Banner />
      <AboutUs />
      <CardSlider />
      <div className="border-style"></div>
      <Course />
      <div className="border-style"></div>
      <WhyUs />
      <div className="border-style"></div>
      <Popularity />
      <div className="border-style"></div>
      <Review />
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
