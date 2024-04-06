import React from "react";
import NavMenu from "./components/NavBar/NavMenu";
import Banner from "./components/Banner/Banner";
import AboutUs from "./components/About/AboutUs";
import CardSlider from "./components/CardSlider/CardSlider";
import WhyChooseUs from "./components/WhyUs/WhyChooseUs";
import Review from "./components/Reviews/Review";
import Tabbar from "./components/Courses/Tabbar";
import Popup from "./components/Popup/Popup";

export default function App() {
  return (
    <>
      <Popup />
      <NavMenu />
      <Banner />
      <AboutUs />
      <CardSlider />
      <Tabbar />
      <WhyChooseUs />
      <Review />
    </>
  );
}
