import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ReviewSlider from './ReviewSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let reviews = [
    {
        name: "Pancham Sardar",
        img_url: "https://lh3.googleusercontent.com/a/ACg8ocJ4g-AroaXPQUpWEAWEtwvFGnNrz7RzLuuNDW4d9I33Vhy8Lf1s=s360-c-no",
        stars: 5,
        disc: `Attending this Japanese language school was a fantastic decision due to its friendly environment and supportive staff, making it easy to connect with fellow students and practice speaking Japanese.It is great way to start my carrer.`
    },
    {
        name: "Sayan Mondol",
        img_url: "https://media.licdn.com/dms/image/D5603AQGwqLAuGJ8w-A/profile-displayphoto-shrink_800_800/0/1687842986093?e=1717632000&v=beta&t=ikbZISdl_GSKieqsIr3xnF8b5xXr5Eee7e_DK9FAAbg",
        stars: 5,
        disc: `While the curriculum's pace could be challenging at times, the personalized attention and immersive teaching style contributed to a transformative experience, helping me gain confidence in speaking and understanding Japanese.`
    },
    {
        name: "Jyotirmay Gayen",
        img_url: "https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/300784210_108013728701892_9044260359287301210_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qBKsZcEuzY0Ab6pek2A&_nc_ht=scontent.fccu3-1.fna&oh=00_AfAlZ_u8eiOQlIbZPdiktyy_Fr8QFWF3kU75DcZzA8bXTA&oe=6614F5E3",
        stars: 5,
        disc: `This Japanese language school offers an exceptional learning environment with small class sizes, personalized attention, and a well-structured curriculum, resulting in significant progress and confidence in Japanese proficiency.`
    },
    {
        name: "Yamada Ichirou",
        img_url: "https://i.pinimg.com/236x/2c/2f/6c/2c2f6c036c63482501f4fc611ae92309.jpg",
        stars: 5,
        disc: `The engaging classes and knowledgeable teachers at this Japanese language school fostered a rewarding learning experience, enhancing both language skills and cultural understanding in a supportive and immersive environment.`
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
        <Container id='client'>
            <Slide direction="left">
                <span className="green">Reviews</span>
                <h1>what people says</h1>
            </Slide>
            <Testimonials>
                <Slider ref={arrowRef} {...settings}>
                    {reviewDisc}
                </Slider>
                <Buttons>
                    <button
                        onClick={() => arrowRef.current.slickPrev()}
                    ><IoIosArrowBack /></button>
                    <button
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

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-size: 1.3rem;
        font-weight: 600;
        text-transform: capitalize;
    }

    h1{
        color: rgba(51, 51, 51, 0.95);
        padding-top: 1rem;
        text-transform: capitalize;
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
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #D7D0D3;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`