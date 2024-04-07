import React from "react";
import NavMenu from "./components/NavBar/NavMenu";
import Banner from "./components/Banner/Banner";
import AboutUs from "./components/About/AboutUs";
import CardSlider from "./components/CardSlider/CardSlider";
import Review from "./components/Reviews/Review";
import Tabbar from "./components/Courses/Tabbar";
import Popup from "./components/Popup/Popup";
import Popularity from "./components/Popularity/Popularity";
import WhyUs from "./components/WhyChoose/WhyUs";

export default function App() {
  return (
    <>
      <Popup />
      <NavMenu />
      <Banner />
      <AboutUs />
      <CardSlider />
      <Popularity />
      <Tabbar />
      <WhyUs />
      <Review />
    </>
  );
}
