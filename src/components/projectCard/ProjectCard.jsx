import React from 'react';
import './projectCard.css';
import { FiGithub } from 'react-icons/fi';


function ProjectCard({imageUrl, title, description, repo, projectLink}) {
    return (
        <div className="portfolio__projectCard-container">

            <div className="portfolio__projectCard-image">     
                <a href={ projectLink } target="_blank" rel="noopener noreferrer">           
                    <img src={ imageUrl } alt="project" />
                </a>
            </div>
            <div className="portfolio__projectCard-content">
                <a href={ projectLink } target="_blank" rel="noopener noreferrer">
                    <h3>{ title }</h3>
                    <p>{ description }</p>
                </a>
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
