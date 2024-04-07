import React from "react";
import './popularity.css';

import Happy from '../A_media/popularity-icon/happy.png';
import Rate from '../A_media/popularity-icon/rating.png';
import Classes from '../A_media/popularity-icon/class.png';

export default function Popularity() {
    return (
        <div className="pop-container">
            <div className="pop-box">
                <div className="pop-logo">
                    <img src={Happy} alt="popularity-icon"></img>
                </div>
                <h1>200+</h1>
                <p>Happy Students</p>
            </div>

            <div className="pop-box">
                <div className="pop-logo">
                    <img src={Rate} alt="popularity-icon"></img>
                </div>
                <h1>50+</h1>
                <p>5 Star Rating</p>
            </div>

            <div className="pop-box">
                <div className="pop-logo">
                    <img src={Classes} alt="popularity-icon"></img>
                </div>
                <h1>100+</h1>
                <p>Lecture Classes</p>
            </div>
        </div>
    );
}