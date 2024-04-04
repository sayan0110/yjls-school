import React from 'react';
import './whychooseus.css';

import Trainer from '../A_media/whyChooseUs_icons/teacher.png';

function WhyChooseUs() {
    return (
        <section className="why-choose-us-section">
            <div className="container">
                <h1 className="section-title">Why Choose Us</h1>
                <span></span>
                <div className="feature-list">
                    <div className="feature-item">
                        <img src={Trainer} alt='trainer'></img>
                        <h3>Experienced Trainer</h3>
                        <p>We have Pearson certified faculty members...</p>
                    </div>
                    <div className="feature-item">
                        <img src={Trainer} alt='trainer'></img>
                        <h3>Highest Success Rate</h3>
                        <p>Students will get a sure-shot success with the high...</p>
                    </div>
                    <div className="feature-item">
                        <img src={Trainer} alt='trainer'></img>
                        <h3>Latest Resources</h3>
                        <p>Making use of the latest technology, we provide...</p>
                    </div>
                    <div className="feature-item">
                        <img src={Trainer} alt='trainer'></img>
                        <h3>Online Support</h3>
                        <p>Our experts are always there to help the students through...</p>
                    </div>
                    <div className="feature-item">
                        <img src={Trainer} alt='trainer'></img>
                        <h3>3500 + Questions to Practice</h3>
                        <p>We give the students various exercises and practice...</p>
                    </div>
                    <div className="feature-item">
                        <img src={Trainer} alt='trainer'></img>
                        <h3>Discussion Sessions</h3>
                        <p>During the discussion sessions, Our experienced team...</p>
                    </div>
                    <div className="feature-item">
                        <img src={Trainer} alt='trainer'></img>
                        <h3>Affordable Fees</h3>
                        <p>We offer the best PTE and NAATI coaching classes...</p>
                    </div>
                    <div className="feature-item">
                        <img src={Trainer} alt='trainer'></img>
                        <h3>Real Time Test Environment</h3>
                        <p>We provide several mock tests for reading, listening...</p>
                    </div>
                    <div className="feature-item">
                        <img src={Trainer} alt='trainer'></img>
                        <h3>Friendly Interaction</h3>
                        <p>Feel free to ask anything, anytime...</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
