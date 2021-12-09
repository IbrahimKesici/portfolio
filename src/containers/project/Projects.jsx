import React from 'react';
import './projects.css';
import { ProjectCard } from '../../components';
import { tradingBot, weather, realEstate } from './imports';


const projectsData = [
    {
        title: 'Harmonic Trading Bot',
        imageUrl: tradingBot,
        description: 'Created with purpose of trading on highly volatile markets such as crypto. The bot identifies the trends on market time series data and apply bullish or bearish harmonic patterns: Bat, Cypher, Shark, ABCD ... on the chart. The input data is fetched from different API sources and results are displayed on a dynamic chart on a website. The bot also highlightes possible entry and exit points.',
        repo: 'https://github.com/IbrahimKesici?tab=repositories'
    },
    {
        title: 'Weather App',
        imageUrl: weather,
        description: 'A fun project that I developed a weather app. I use a simple ETL process which I get weather temprature measurements from different weather stations in XML/JSON format, clean and present it to user on command line. Users can search for specific countries last two days weather tempratures',
        repo: 'https://github.com/IbrahimKesici/weather_displayer'
    },
    {
        title: 'Real Estate WebSite',
        imageUrl: realEstate,
        description: 'Developed to display rental homes and sale properties as a web application. It comes with advanced filtering and modern design.',
        repo: 'https://github.com/IbrahimKesici/real-estate-app'
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
