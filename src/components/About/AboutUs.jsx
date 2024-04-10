import React from "react";
import { Slide } from 'react-awesome-reveal';
import './aboutus.css';

export default function AboutUs() {
    return (
        <div className="about-container" id="about">
            <Slide direction="down">
                <span className="about">About us</span>
                <h1 className="about-des">who we are</h1>
            </Slide>
            <p>Yume Japanese Language School, nestled in South Kolkata, is dedicated to providing exceptional Japanese language education. With experienced instructors and a comprehensive curriculum, we offer personalized learning experiences for students of all levels. Our mission is to equip students with not only language proficiency but also cultural insights, empowering them to succeed in a globalized world. Join us at Yume Japanese Language School and embark on a transformative journey towards linguistic mastery and cultural enrichment.</p>         
        </div>
    );
}
