import React from 'react';
import './projectCard.css';
import { FiGithub } from 'react-icons/fi';


function ProjectCard({imageUrl, title, description, repo}) {
    return (
        <div className="portfolio__projectCard-container">
            <div className="portfolio__projectCard-image">
                <img src={ imageUrl } alt="project" />

            </div>
            <div className="portfolio__projectCard-content">
                <h3>{ title }</h3>
                <p>{ description }</p>
            </div>
            <div className="portfolio__projectCard-icon">
                <a href={ repo }  target="_blank" rel="noopener noreferrer">
                    <FiGithub size="2rem" />
                </a>
            </div>
        </div>
    )
}

export default ProjectCard
