import React from 'react';
import './header.css';

import ai from "../../assets/ai.png";

const Header = () => {
    return (
        <div className="portfolio__header" id="home">
            <div className="portfolio__header-content">
                <h1 className="gradient__text">Hi there, I'm Ibrahim. Software Developer</h1>
                <p>I design and code beautifully simple things and I love what I do. I currently live in ~~Gdansk~~ and have interest on different areas of technology</p>
                
                <div className="portfolio__header-content__input">
                    <a href="#footer">
                        <button type="button">Get in Touch</button>
                    </a>
                </div>

            </div>
            <div className="portfolio__header-image">
                <img src={ai} alt="ai" />
            </div>
        </div>
    )
}

export default Header
