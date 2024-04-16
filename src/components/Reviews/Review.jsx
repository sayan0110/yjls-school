import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ReviewSlider from './ReviewSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let reviews = [
    {
        name: "Sumita Mondal",
        img_url: "https://lh3.googleusercontent.com/a-/ALV-UjU9hGMLGr8r7pcpVzOBclOuwRbOOvt_1eOoKxt4vBDwgz1-_w=w75-h75-p-rp-mo-br100",
        stars: 5,
        disc: `Best Japanese School. This is the best school if you want to learn Japanese. So without wasting time get admitted immediately!! 🇮🇳❤️🇯🇵`
    },
    {
        name: "Mahak Mala Saren",
        img_url: "https://lh3.googleusercontent.com/a-/ALV-UjXmcv_xkMDnMk00WmnzSExLms0TYbj6Hqj6mBrrTFgKLG5g3MU=w75-h75-p-rp-mo-br100",
        stars: 5,
        disc: `The teacher teaches with a lot of care and patience and not only he teaches the students about the language but also talks about Japanese people , their lifestyle , cuisine , culture and a lot more things , through which we learn a lot about Japan . I am personally very grateful  that such a good Japanese teacher is there who teaches something so unique  . I highly recommend this place if you are willing to learn Japanese.`
    },
    {
        name: "Aitijhya Saha",
        img_url: "https://lh3.googleusercontent.com/a/ACg8ocKBlaqwERhErR29RQwiJL-piMa6yN8m2mj70T7ofAfuBSGExw=w75-h75-p-rp-mo-ba2-br100",
        stars: 5,
        disc: `Excellent school. The teachers are all very helpful, easy-going, cooperative  and patiently explain all our little doubts. A great place to learn Japanese while having fun.`
    },
    {
        name: "Ramyani Das",
        img_url: "https://lh3.googleusercontent.com/a-/ALV-UjVrOI7sLN59Ik8AKyVT5b94Wzz6HFRuYrFW1T33LaVquPVXw56a=w75-h75-p-rp-mo-br100",
        stars: 5,
        disc: `Extremely patient teacher. He has taught me with a lot of enthusiasm and in an enjoyable environment.`
    },
    {
        name: "Srayashi Ghosh",
        img_url: "https://lh3.googleusercontent.com/a-/ALV-UjU7ISGxKX472GwGcW89YD41VYBnrxMIUizsktnaK7yY67t-_UI=w75-h75-p-rp-mo-br100",
        stars: 5,
        disc: `Amazing place to begin with learning Japanese language. With approachable and understanding teacher it becomes easy to learn and grasp a difficult language like Japanese. Highly recommended for all stages.`
    },
    {
        name: "Anju Maheshwari Sarkhel",
        img_url: "https://lh3.googleusercontent.com/a-/ALV-UjVWvLIW54AN6Mo74iu_xImJEZtl5jcu6A-FJCCb_9LlcVqzR1M=w75-h75-p-rp-mo-br100",
        stars: 5,
        disc: `Awesome place. Teachers are anazing and easy going . Definately recommended.`
    },
    {
        name: "Bikram Mistry",
        img_url: "https://lh3.googleusercontent.com/a/ACg8ocJYF5FZCnKpo5GMRlrTZZTRholUQX3EI3x_EpmQVxgyHppHvA=w75-h75-p-rp-mo-br100",
        stars: 5,
        disc: `Best language school.`
    },
    {
        name: "mousumi sarkar",
        img_url: "https://lh3.googleusercontent.com/a-/ALV-UjXXIT5mSQMPLmBCGVn-xQilDZYb_yV3OqzJ0rpgs6hN1WXeuqiLRA=w75-h75-p-rp-mo-br100",
        stars: 5,
        disc: `The teachers are really helpful.`
    },
]
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
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
}

const Review = () => {
    const arrowRef = useRef(null);
    let reviewDisc = "";
    reviewDisc = reviews.map((item, i) => (
        <ReviewSlider item={item} key={i} />
    ))
    return (
        <Container id="reviews">
            <Slide direction="down">
                <span className="review">Reviews</span>
                <h1 className="review-des">what people say</h1>
            </Slide>
            <Testimonials>
                <Slider ref={arrowRef} {...settings}>
                    {reviewDisc}
                </Slider>
                <Buttons>
                    <button className="btn-slick"
                        onClick={() => arrowRef.current.slickPrev()}
                    ><IoIosArrowBack /></button>
                    <button className="btn-slick"
                        onClick={() => arrowRef.current.slickNext()}
                    ><IoIosArrowForward /></button>
                </Buttons>
            </Testimonials>
        </Container>
    );
}

export default Review;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;
    margin-bottom: 30px;

    @media(max-width:840px){
        width: 90%;
    }

    .review{
        font-weight: 600;
        background-image: linear-gradient(to right, #ffd194, #d1913c);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: clamp(1rem, 4vw, 1.3rem);
        text-transform: capitalize;
        margin-left: 15px;
    }

    .review-des{
        font-size: clamp(1rem, 4vw, 2rem);
        text-transform: capitalize;
        margin-top: 8px;
        margin-left: 15px;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #D7D0D3;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 1rem;
    bottom: -2rem;

    .btn-slick{
        background-color: transparent;
        margin-left: 0.5em;
        border: none;
        color: rgba(51, 51, 51, 0.85);
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`