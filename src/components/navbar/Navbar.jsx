import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';
import { SocialIcons } from '..';

const Menu = () => {
    return (
        <>
            <div className="portfolio__navbar-menu-link">
                <p><a href="#about">About</a></p>
            </div>
            <div className="portfolio__navbar-menu-link">
                <p><a href="#projects">Projects</a></p>
            </div>
        </>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="portfolio__navbar">
            <div className="portfolio__navbar-links">
                <div className="portfolio__navbar-links_logo">
                    <a href="#home"> 
                        <img src={logo} alt="logo"/>
                    </a>
                </div>
                <div className="portfolio__navbar-links_container">
                   <Menu />
                </div>
            </div>
            <div className="portfolio__navbar-socialIcons">
                < SocialIcons />
            </div>
            <div className="portfolio__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="portfolio__navbar-menu_container scale-up-center">
                        <div className="portfolio__navbar-menu-links">
                            <Menu />
                        </div>
                    </div>
                )

                }
            </div>
        </div>
    )
}

export default Navbar