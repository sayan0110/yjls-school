import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './cardslider.css';

import cardImage1 from '../A_media/cardImage1.jpg';
import cardImage2 from '../A_media/cardImage2.jpg';
import cardImage3 from '../A_media/cardImage3.jpg';
import cardImage4 from '../A_media/cardImage4.jpg';
import cardImage5 from '../A_media/cardImage5.jpg';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "#7a7a7a45",
                right: "-40px",
                borderRadius: "50%",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "#7a7a7a45",
                left: "-40px",
                borderRadius: "50%",
            }}
            onClick={onClick}
        />
    );
}

export default function CardSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="slider-card">
                    <img src={cardImage1} alt="cardImage"></img>
                </div>

                <div className="slider-card">
                    <img src={cardImage2} alt="cardImage"></img>
                </div>

                <div className="slider-card">
                    <img src={cardImage3} alt="cardImage"></img>
                </div>

                <div className="slider-card">
                    <img src={cardImage4} alt="cardImage"></img>
                </div>

                <div className="slider-card">
                    <img src={cardImage5} alt="cardImage"></img>
                </div>
            </Slider>
        </div>
    );
}
