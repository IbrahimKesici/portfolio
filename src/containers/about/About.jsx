import React from 'react';
import { Feature } from '../../components';
import './about.css';
import Skill from '../../components/skill/Skill';
import { SiPython, SiJavascript, SiLinux, SiPowerbi,SiGit, SiBamboo, SiHtml5, SiSplunk, SiDocker, SiKubernetes, SiCsharp, SiPostgresql, SiRedis, SiApachekafka, SiAtlassian} from 'react-icons/si';
import {FaDatabase} from 'react-icons/fa';

const languages = [
    {
        icon: < SiPython size="2.7rem" color="white" />,
        name: 'Python'
    },
    {
        icon: <SiCsharp size="2.7rem" color="white" />,
        name: 'C#'
    },
    {
        icon: <FaDatabase size="2.7rem" color="white" />,
        name: 'SQL'
    },
    {
        icon: <SiJavascript size="2.7rem" color="white" />,
        name: 'React/Javascript'
    },
    {
        icon: <SiHtml5 size="2.7rem" color="white" />,
        name: 'HTML/CSS'
    }
];

const technologies = [
    {
        icon: <SiLinux size="2.7rem" color="white" />,
        name: 'Linux'
    },
    {
        icon: <SiSplunk size="2.7rem" color="white" />,
        name: 'Splunk'
    },
    {
        icon: <SiApachekafka size="2.7rem" color="white" />,
        name: 'ApacheKafka'
    },
    {
        icon: <SiAtlassian size="2.7rem" color="white" />,
        name: 'Atlassian'
    },
    {
        icon: <SiPostgresql size="2.7rem" color="white" />,
        name: 'Postgresql'
    },
    {
        icon: <SiRedis size="2.7rem" color="white" />,
        name: 'Redis'
    },

    {
        icon: <SiPowerbi size="2.7rem" color="white" />,
        name: 'PowerBI'
    }
];

const cicd = [
    {
        icon: <SiDocker size="2.7rem" color="white" />,
        name: 'Docker'
    },
    {
        icon: <SiKubernetes size="2.7rem" color="white" />,
        name: 'Kubernetes'
    },
    {
        icon: <SiBamboo size="2.7rem" color="white" />,
        name: 'Bamboo'
    },
    {
        icon: <SiGit size="2.7rem" color="white" />,
        name: 'GIT'
    },
];

const About = () => {
    return (
        <div className="portfolio__about section__margin" id="about">
            
            <div className="portfolio__about-container">
                <div className="portfolio__about-container__heading">
                    <h1 className="gradient__text">My, Myself & I</h1>
                    <p>Hello! I'm a Software Developer currently located in Poland. I started my career as a Robotics Engineer and took part on several projects from computer vision to robotics design. From that day on, I love to learn not only about programming but also other technologies: game design, databases, infrastructure design, CI/CD are just a few.</p>
                    <p>Fast-forward to today, my main focus on these days is building simple, efficient and inclusive applications and helping business units to automate their business processes.</p>
                    <p>When I'm not coding, you can find me exploring blockchain, discovering different trading strategies, cycling and creating tech content. </p>
                </div>
                <div className="portfolio__about-container__skills">
                    <div className="portfolio__about-container__skills-language">
                        <div className="portfolio__about-container__bar" />
                        <h1>Languages</h1>
                        {languages.map((item, index) => (
                            <Skill icon={item.icon} name={item.name} key={item.name + index} />
                        ))}
                    </div>
                    <div className="portfolio__about-container__skills-tech">
                        <div className="portfolio__about-container__bar" />
                        <h1>Technologies</h1>
                        {technologies.map((item, index) => (
                            <Skill icon={item.icon} name={item.name} key={item.name + index} />
                        ))}
                    </div>
                    <div className="portfolio__about-container__skills-cicd">
                        <div className="portfolio__about-container__bar" />
                        <h1>CI/CD</h1>
                        {cicd.map((item, index) => (
                            <Skill icon={item.icon} name={item.name} key={item.name + index} />
                        ))}
                    </div>

                </div>
            </div>
            <div className="portfolio__about-features">
                <Feature title="Work History" components={["2020-Present: Nordea Bank", "2019-2020: Mercer", "2018-2019: Philip Morris International"]}/>
                <Feature title="Education" components={["2016-2018: (M.Sc.) Warsaw University of Technology - Robotics", "2011-2016: (B.Sc.) Mevlana University - Mechatronics Engineering"]} />
            </div>

        </div>
    )
}

export default About
