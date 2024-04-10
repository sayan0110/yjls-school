import React, { useState, useEffect } from 'react';
import { Slide } from 'react-awesome-reveal';
import './course.css';
// eslint-disable-next-line
import Card from './Card-section/CourseCard';

const Course = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [lineStyle, setLineStyle] = useState({});

    useEffect(() => {
        const activeButton = document.querySelector('.tab_btn.active');
        if (activeButton) {
            setLineStyle({
                width: activeButton.offsetWidth,
                left: activeButton.offsetLeft
            });
        }
    }, [activeTab]);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tabbar-section" id="courses">
            <Slide direction="down">
                <span className="course">Courses</span>
                <h1 className="course-des">Certificates We Offer</h1>
            </Slide>
            <div className="tabbar-container">
                <div className="tab_box">
                    <button className={`tab_btn ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>JLPT N5</button>
                    <button className={`tab_btn ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>JLPT N4</button>
                    <button className={`tab_btn ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>JLPT N3</button>
                    <div className="line" style={lineStyle}></div>
                </div>

                <div className="content_box">
                    <div className={`content ${activeTab === 0 ? 'active' : ''}`}>
                        <h2>JLPT N5</h2>
                        <p>JLPT N5 is the introductory level of the Japanese Language Proficiency Test, assessing basic language skills in vocabulary, grammar, reading, and listening. To pass, focus on everyday vocabulary, essential grammar structures, and basic reading comprehension.</p>
                        {/* <Card /> */}
                    </div>
                    <div className={`content ${activeTab === 1 ? 'active' : ''}`}>
                        <h2>JLPT N4</h2>
                        <p>The JLPT N4 tests your knowledge in understanding basic Japanese. This means that in addition to everything you learned in JLPT N5, you can: Understand about 1500 new vocabulary and about 170 new kanji.</p>
                        {/* <Card /> */}
                    </div>
                    <div className={`content ${activeTab === 2 ? 'active' : ''}`}>
                        <h2>JLPT N3</h2>
                        <p>The JLPT N3 is the middle (intermediate) level of the Japanese Language Proficiency Test (JLPT). To pass the JLPT N3, you need to be able to read about 650 kanji and know about 3,750 vocabulary words.</p>
                        {/* <Card /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;
