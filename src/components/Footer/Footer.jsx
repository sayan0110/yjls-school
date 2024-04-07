import React from "react";
import './footer.css';
import FooterBg from '../A_media/footer-img/learning.png';

export default function Footer() {
    return (
        <>
            <div className="footer-section">

                <div className="about-school">
                    <h4>Yume Japanese Language School</h4>
                    <p>Yume Japanese Language School, nestled in South Kolkata, is dedicated to providing exceptional Japanese language education. With experienced instructors and a comprehensive curriculum, we offer personalized learning experiences for students of all levels.</p>
                    <div className="social-media">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div className="quick-details">
                    <h4>Quick Details</h4>
                    <div>Location</div>
                    <div>Phone Numbers</div>
                    <div>Mail id</div>
                </div>

                <div className="developer-details">
                    <h4>Devolopers</h4>
                    <div>Pancham Sardar</div>
                    <div>Sayan Mondol</div>
                </div>

                <div >
                    <img className="footer-image" src={FooterBg} alt="footer-img"></img>
                </div>
            </div>
        </>
    );
}