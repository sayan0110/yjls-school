import React, { useState, useEffect } from 'react';
import './tabbar.css';

const Tabbar = () => {
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
        <div className="tabbar-section">
            <div className="tabbar-container">
                <div className="tab_box">
                    <button className={`tab_btn ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>JLPT N5</button>
                    <button className={`tab_btn ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>JLPT N4</button>
                    <button className={`tab_btn ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>JLPT N3</button>
                    <button className={`tab_btn ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>JLPT N2</button>
                    <div className="line" style={lineStyle}></div>
                </div>

                <div className="content_box">
                    <div className={`content ${activeTab === 0 ? 'active' : ''}`}>
                        <h2>JLPT N5</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rerum quae, quas vitae sint consectetur dolores, excepturi, fugiat voluptatum doloribus laboriosam optio possimus non in quaerat velit dolore quia doloremque blanditiis dolorem.</p>
                    </div>
                    <div className={`content ${activeTab === 1 ? 'active' : ''}`}>
                        <h2>JLPT N4</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rerum quae, quas vitae sint consectetur dolores, excepturi, fugiat voluptatum doloribus laboriosam optio possimus non in quaerat velit dolore quia doloremque blanditiis dolorem.</p>
                    </div>
                    <div className={`content ${activeTab === 2 ? 'active' : ''}`}>
                        <h2>JLPT N3</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rerum quae, quas vitae sint consectetur dolores, excepturi, fugiat voluptatum doloribus laboriosam optio possimus non in quaerat velit dolore quia doloremque blanditiis dolorem.</p>
                    </div>
                    <div className={`content ${activeTab === 3 ? 'active' : ''}`}>
                        <h2>JLPT N2</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rerum quae, quas vitae sint consectetur dolores, excepturi, fugiat voluptatum doloribus laboriosam optio possimus non in quaerat velit dolore quia doloremque blanditiis dolorem.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tabbar;
