import React from 'react';
import styled from 'styled-components';
import { IoIosQuote } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";

const ReviewSlider = (props) => {
    const { name, position, img_url, stars, disc } = props.item;
    return (
        <Container>
            <Header>
                <span className='quote'><IoIosQuote /></span>
                <div>
                    {Array(stars).fill().map((_, i) => (
                        <span className='star' key={i}>
                            <AiOutlineStar />
                        </span>
                    ))}
                </div>
            </Header>
            <Body>
                {disc}
            </Body>
            <Footer>
                <img src={img_url} alt={name} />
                <div className="details">
                    <h1>{name}</h1>
                </div>
            </Footer>
        </Container>
    );
}

export default ReviewSlider;

const Container = styled.div`
    background: linear-gradient(180deg, white 0%, #D7D0D3 100%);
    padding: 1.5rem 1rem;
    padding-left: 1.5rem;
    margin: 0 1rem;
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .quote{
        font-size: 3rem;
        color: #D7D0D3;
        opacity: 0.7;
    }

    .star{
        color: #ffcd3c;
        font-size: 1.3rem;
    }
`
const Body = styled.p`
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 1.5rem;
    line-height: 1.2rem;
`
const Footer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    img{
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50px;
        object-fit: cover;
    }

    h1{
        color: rgba(0, 0, 0, 0.85);
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 10px;
        @media(max-width: 580px){
            font-size: 1rem;
        }
        @media(max-width: 538px){
            font-size: 0.9rem;
        }
    }

`