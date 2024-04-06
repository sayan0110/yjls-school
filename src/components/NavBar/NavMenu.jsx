/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './navmenu.css';

import Logo from '../A_media/site-logo.jpg';

const NavMenu = () => {
    const showSidebar = (event) => {
        event.preventDefault();
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    };

    const hideSidebar = (event) => {
        event.preventDefault();
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    };

    return (
        <div>
            <nav>
                <ul className="sidebar">
                    <li onClick={hideSidebar}><a href=""><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" /></svg></a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Courses</a></li>
                    <li><a href="">Why Us</a></li>
                    <li><a href="">Reviews</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
                <ul>
                    <li className="site-name">
                        <img className="logo" src={Logo} alt='logo'></img>
                        <a href="">Yume Japanese Language School</a>
                    </li>
                    <li className="hideOnMobile"><a href="">About</a></li>
                    <li className="hideOnMobile"><a href="">Courses</a></li>
                    <li className="hideOnMobile"><a href="">Why Us</a></li>
                    <li className="hideOnMobile"><a href="">Reviews</a></li>
                    <li className="hideOnMobile"><a className="contactUs-navTab" href="">Contact Us</a></li>

                    <li className="menu-button" onClick={showSidebar}><a href=""><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" /></svg></a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavMenu;
