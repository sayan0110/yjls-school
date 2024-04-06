import React from 'react';
import { Slide } from 'react-awesome-reveal';
import './whychooseus.css';

import Trainer from '../A_media/whyChooseUs_icons/teacher.png';
import Succes from '../A_media/whyChooseUs_icons/succes.png';
import Resource from '../A_media/whyChooseUs_icons/resource.png';
import Support from '../A_media/whyChooseUs_icons/support.png';
import Practice from '../A_media/whyChooseUs_icons/practice.png';
import Discussion from '../A_media/whyChooseUs_icons/discussion.png';
import Fees from '../A_media/whyChooseUs_icons/fees.png';
import Test from '../A_media/whyChooseUs_icons/test.png';
import Friendly from '../A_media/whyChooseUs_icons/friendly.png';

function WhyChooseUs() {
    return (
        <section className="why-choose-us-section">
            <div className="container">

                <Slide direction="left">
                    <span className="why">Why Us</span>
                    <h1 className="why-des">reason for choosing</h1>
                </Slide>
                
                <div className="feature-list">
                    <div className="feature-item">
                        <img src={Trainer} alt='trainer'></img>
                        <h3>Experienced Trainer</h3>
                        <p>We have Pearson certified faculty members...</p>
                    </div>
                    <div className="feature-item">
                        <img src={Succes} alt='trainer'></img>
                        <h3>Highest Success Rate</h3>
                        <p>Students will get a sure-shot success with the high...</p>
                    </div>
                    <div className="feature-item">
                        <img src={Resource} alt='trainer'></img>
                        <h3>Latest Resources</h3>
                        <p>Making use of the latest technology, we provide...</p>
                    </div>
                    <div className="feature-item">
                        <img src={Support} alt='trainer'></img>
                        <h3>Online Support</h3>
                        <p>Our experts are always there to help the students through...</p>
                    </div>
                    <div className="feature-item">
                        <img src={Practice} alt='trainer'></img>
                        <h3>Questions to Practice</h3>
                        <p>We give the students various exercises and practice...</p>
                    </div>
                    <div className="feature-item">
                        <img src={Discussion} alt='trainer'></img>
                        <h3>Discussion Sessions</h3>
                        <p>During the discussion sessions, Our experienced team...</p>
                    </div>
                    <div className="feature-item">
                        <img src={Fees} alt='trainer'></img>
                        <h3>Affordable Fees</h3>
                        <p>We offer the best PTE and NAATI coaching classes...</p>
                    </div>
                    <div className="feature-item">
                        <img src={Test} alt='trainer'></img>
                        <h3>Real Time Tests</h3>
                        <p>We provide several mock tests for reading, listening...</p>
                    </div>
                    <div className="feature-item">
                        <img src={Friendly} alt='trainer'></img>
                        <h3>Friendly Interaction</h3>
                        <p>Feel free to ask about anything, anytime...</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
