import React from "react";
import './banner.css';
import bannerImage from "../A_media/banner-image.png";

// const year = new Date().getFullYear();

export default function Banner() {
    return (
        <>
            <div className="banner-container">
                <img src={bannerImage} alt="banner"></img>
                {/* <div className="display-text">OPEN FOR {year}</div> */}
            </div>
        </>
    );
}
