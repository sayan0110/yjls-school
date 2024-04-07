import React from "react";
import './popularity.css';

import Diversity1Icon from '@mui/icons-material/Diversity1';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import SchoolIcon from '@mui/icons-material/School';

export default function Popularity() {
    return (
        <div className="pop-container">
            <div className="pop-box">
                <div className="pop-logo">
                    <Diversity1Icon />
                </div>
                <h1>200+</h1>
                <p>Happy Students</p>
            </div>

            <div className="pop-box">
                <div className="pop-logo">
                    <StarBorderPurple500Icon />
                </div>
                <h1>50+</h1>
                <p>5 Star Rating</p>
            </div>

            <div className="pop-box">
                <div className="pop-logo">
                    <SchoolIcon />
                </div>
                <h1>100+</h1>
                <p>Lecture Classes</p>
            </div>
        </div>
    );
}