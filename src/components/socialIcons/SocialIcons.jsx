import React from 'react'
import './socialIcons.css';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai';

function SocialIcons() {
    return (
        <div className="portfolio__socialIcons">
            <div className="portfolio__socialIcons-icon">
                <a href="https://github.com/IbrahimKesici?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub size="2.7rem" />
                </a>
            </div>
            <div className="portfolio__socialIcons-icon">
                <a href="https://www.linkedin.com/in/ibrahim-kesici-18643469/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin size="2.7rem" />
                </a>
            </div>
            <div className="portfolio__socialIcons-icon">
                <a href="https://twitter.com/ibrahim05617100" target="_blank" rel="noopener noreferrer">
                    <AiFillTwitterCircle size="2.7rem" />
                </a>
            </div>
        </div>
    )
}

export default SocialIcons
