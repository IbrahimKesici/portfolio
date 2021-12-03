import React from 'react';
import './projects.css';
import { ProjectCard } from '../../components';
import { tradingBot } from './imports';


const projectsData = [
    {
        title: 'Harmonic Trading Bot',
        imageUrl: tradingBot,
        description: 'Created with purpose of trading on highly volatile markets such as crypto. The bot identifies the trends on market time series data and apply bullish or bearish harmonic patterns: Bat, Cypher, Shark, ABCD ... on the chart. The input data is fetched from different API sources and results are displayed on a dynamic chart on a website. The bot also highlightes possible entry and exit points.',
        repo: 'https://github.com/IbrahimKesici?tab=repositories'
    },
    {
        title: 'Bot 2',
        imageUrl: tradingBot,
        description: 'With a mission of having successfull trades on high volatile markets such as crypto, I have applied harmonic trade patterns: Bat, Cypher, Shark, ABCD ... on timeseries and display the results on a webpage',
        repo: ''
    },
    {
        title: 'Bot3',
        imageUrl: tradingBot,
        description: 'With a mission of having successfull trades on high volatile markets such as crypto, I have applied harmonic trade patterns: Bat, Cypher, Shark, ABCD ... on timeseries and display the results on a webpage',
        repo: ''
    }
];  

const Projects = () => {
    return (
        <div className="portfolio__blog section__padding" id="projects">
            <div className="portfolio__blog-heading">
                <h1 className="gradient__text">Some things I’ve built ...</h1>
            </div>
            <div className="portfolio__blog-container">
                <div className="portfolio__blog-container_groupA">
                    {projectsData.slice(0,1).map((item, index) => (
                        <ProjectCard imageUrl={item.imageUrl} title={item.title} description={item.description} repo={item.repo} key={item.title + index} />
                    ))}
                </div>
                <div className="portfolio__blog-container_groupB">
                    {projectsData.slice(1).map((item, index) => (
                        <ProjectCard imageUrl={item.imageUrl} title={item.title} description={item.description} repo={item.repo} key={item.title + index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
