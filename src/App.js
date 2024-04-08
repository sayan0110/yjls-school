import React from "react";
import NavMenu from "./components/NavBar/NavMenu";
import Banner from "./components/Banner/Banner";
import AboutUs from "./components/About/AboutUs";
import CardSlider from "./components/CardSlider/CardSlider";
import Review from "./components/Reviews/Review";
import Course from "./components/Courses/Course";
import Popup from "./components/Popup/Popup";
import Popularity from "./components/Popularity/Popularity";
import WhyUs from "./components/WhyChoose/WhyUs";
import Footer from "./components/Footer/Footer";

import Bg1 from './components/A_media/Background/site-bg1.jpg';

const borderStyle = {
  display: "flex",
  alignItems: "center",
  margin: "30px 0",
  minHeight: "1px",
  minWidth: "1080px",
  background: "linear-gradient(270deg, hsla(0, 0%, 100%, .05) -.13%, hsla(0, 0%, 88%, .05) 0, #e0e0e0 49.17%, hsla(0, 0%, 88%, .05))"
};

const copyrightStyle = {
  margin: "auto",
  width: "70%",
  padding: "10px 0",
  textAlign: "center",
  marginBottom: "3rem"
};

const h5Style = {
  display: "flex",
  justifyContent: "center",
  fontSize: "15px",
  fontWeight: "700",
  lineHeight: "21px",
  color: "#b7b7b7",
  minWidth: "1080px",
  textAlign: "center",
  marginBottom: "10px"
};

const pStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "12px",
  fontWeight: "500",
  color: "#b7b7b7",
  lineHeight: "22px"
};

export default function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <img className="bg1" src={Bg1} alt="bg"></img>
      {/* <Popup /> */}
      <NavMenu />
      <Banner />
      <AboutUs />
      <CardSlider />
      <div style={borderStyle}></div>
      <Course />

      <div style={borderStyle}></div>
      <WhyUs />

      <div style={borderStyle}></div>
      <Popularity />

      <div style={borderStyle}></div>
      <Review />

      <div style={borderStyle}></div>
      <Footer />

      <div style={borderStyle}></div>

      <div style={copyrightStyle}>
        <h5 style={h5Style}>© {year} YJLS.com All rights reserved.</h5>
        <p style={pStyle}>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>
      </div>
    </>
  );
}
