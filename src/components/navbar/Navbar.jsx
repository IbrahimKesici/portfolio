import React, { useState } from 'react';
import { RiMenu3Line, RiClosedLine, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';
import { SocialIcons } from '..';

const Menu = () => {
    return (
        <>
            <div className="gpt3__navbar-menu-link">
                <p><a href="#home">Home</a></p>
            </div>
            <div className="gpt3__navbar-menu-link">
                <p><a href="#wgpt3">What is GPT?</a></p>
            </div>
            <div className="gpt3__navbar-menu-link">
                <p><a href="#possibility">Open AI</a></p>
            </div>
            <div className="gpt3__navbar-menu-link">
                <p><a href="#features">Case Studies</a></p>
            </div>
            <div className="gpt3__navbar-menu-link">
                <p><a href="#blog">Library</a></p>
            </div>
        </>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                   <Menu />
                </div>
            </div>
            <div className="gpt3__navbar-socialIcons">
                < SocialIcons />
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu-links">
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