/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './navmenu.css';

import Logo from '../A_media/site-logo.jpg';
import Menu from '../A_media/menu.png';
import CloseMenu from '../A_media/close-menu.png';

const NavMenu = () => {
    const scrollToSection = (event, sectionId) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
        hideSidebar();
    };

    const showSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    };

    const hideSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    };

    return (
        <div>
            <nav>
                <ul className="sidebar">
                    <li className="close-menu" onClick={hideSidebar}>
                        <a>
                            <img src={CloseMenu} alt="menu"></img>
                        </a>
                    </li>
                    <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
                    <li><a href="#courses" onClick={(e) => scrollToSection(e, 'courses')}>Courses</a></li>
                    <li><a href="#whyus" onClick={(e) => scrollToSection(e, 'whyus')}>Why Us</a></li>
                    <li><a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')}>Reviews</a></li>
                    <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact Us</a></li>
                </ul>
                <ul>
                    <li className="site-name">
                        <img className="site-logo" src={Logo} alt='logo'></img>
                        <a>Yume Japanese Language School</a>
                    </li>
                    <li className="hideOnMobile"><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
                    <li className="hideOnMobile"><a href="#courses" onClick={(e) => scrollToSection(e, 'courses')}>Courses</a></li>
                    <li className="hideOnMobile"><a href="#whyus" onClick={(e) => scrollToSection(e, 'whyus')}>Why Us</a></li>
                    <li className="hideOnMobile"><a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')}>Reviews</a></li>
                    <li className="hideOnMobile"><a className="contactUs-navTab" href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact Us</a></li>

                    <li className="menu-button" onClick={showSidebar}><a><img src={Menu} alt="menu"></img></a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavMenu;
