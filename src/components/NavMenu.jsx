import React, { useState } from 'react';
import './navmenu.css';

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </button>
            {isOpen && (
                <div className="menu">
                    <div className="menu-item">
                        <p>Home</p>
                    </div>
                    <div className="menu-item">
                        <p>About</p>
                    </div>
                    <div className="menu-item">
                        <p>Courses</p>
                    </div>
                    <div className="menu-item">
                        <p>Why Us</p>
                    </div>
                    <div className="menu-item">
                        <p>Contact Us</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavMenu;
