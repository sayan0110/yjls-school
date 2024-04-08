import React from "react";
import './popularity.css';

import Happy from '../A_media/popularity-icon/happy.png';
import Rating from '../A_media/popularity-icon/rating.png';
import Class from '../A_media/popularity-icon/class.png';

export default function Popularity() {
    return (
        <div className="pop-container">
            <div className="pop-box">
                <div className="pop-logo">
                    <img src={Happy} alt="happy"></img>
                </div>
                <h1>200+</h1>
                <p>Happy Students</p>
            </div>

            <div className="pop-box">
                <div className="pop-logo">
                    <img src={Rating} alt="rating"></img>
                </div>
                <h1>50+</h1>
                <p>5 Star Rating</p>
            </div>

            <div className="pop-box">
                <div className="pop-logo">
                    <img src={Class} alt="class"></img>
                </div>
                <h1>100+</h1>
                <p>Lecture Classes</p>
            </div>
        </div>
    );
}