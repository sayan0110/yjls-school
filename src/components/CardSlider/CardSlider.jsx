import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './cardslider.css';

import cardImage1 from '../A_media/card-slider-image/cardImage1.jpg';
import cardImage2 from '../A_media/card-slider-image/cardImage2.jpg';
import cardImage3 from '../A_media/card-slider-image/cardImage3.jpg';
import cardImage4 from '../A_media/card-slider-image/cardImage4.jpg';
import cardImage5 from '../A_media/card-slider-image/cardImage5.jpg';
import cardImage6 from '../A_media/card-slider-image/cardImage6.jpg';
import cardImage7 from '../A_media/card-slider-image/cardImage7.jpg';
import cardImage8 from '../A_media/card-slider-image/cardImage8.jpg';
import cardImage9 from '../A_media/card-slider-image/cardImage9.jpg';

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
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    swipeToSlide: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    swipeToSlide: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 530,
                settings: {
                    swipeToSlide: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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

                <div className="slider-card">
                    <img src={cardImage6} alt="cardImage"></img>
                </div>

                <div className="slider-card">
                    <img src={cardImage7} alt="cardImage"></img>
                </div>

                <div className="slider-card">
                    <img src={cardImage8} alt="cardImage"></img>
                </div>

                <div className="slider-card">
                    <img src={cardImage9} alt="cardImage"></img>
                </div>
            </Slider>
        </div>
    );
}
