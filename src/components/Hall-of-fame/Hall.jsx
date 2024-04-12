import React from "react";
import { Slide } from 'react-awesome-reveal';
import './hall.css';
import hallImage from "../A_media/hall-of-fame.png";

export default function Hall() {
    return (
        <>
            <div className="hall-container">
                <Slide direction="down">
                    <span className="hall">Hall Of Fame</span>
                    <h1 className="hall-des">what inspires us</h1>
                </Slide>
                <img src={hallImage} alt="fame"></img>
            </div>
        </>
    );
}
