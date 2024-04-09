import React from 'react'
import styled from 'styled-components';

const Card = (props) => {
    const { Icon, disc, title } = props;
    return (
        <Container>
            <span className="green">{Icon}</span>
            <h1>{title}</h1>
            <p>{disc}</p>
        </Container>
    )
}

export default Card;

const Container = styled.div`
    width: auto;
    padding: 1rem;
    background: white;
    span{
        font-size: 4rem;
    }
    
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
        background-image: linear-gradient(to right, #434343 0%, black 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p{
        font-size: 0.9rem;
    }
`