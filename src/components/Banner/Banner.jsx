import React from "react";
import './banner.css';
import bannerImage from "../A_media/banner-image1.png";

export default function Banner() {
    return (
        <>
            <div className="banner-container">
                <img src={bannerImage} alt="banner"></img>
            </div>
        </>
    );
}
