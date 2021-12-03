import React from 'react';
import { Article } from '../../components';
import './blog.css';
import {blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">A lot is happening,</h1>
                <h1 className="gradient__text">We are blogging about it</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imageUrl={blog01} date="Sep 25, 2021" title="GPT3 and Open AI the future. Let us exlplore how it is?" />
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imageUrl={blog02} date="Sep 25, 2021" title="GPT3 and Open AI the future. Let us exlplore how it is?" />
                    <Article imageUrl={blog03} date="Sep 25, 2021" title="GPT3 and Open AI the future. Let us exlplore how it is?" />
                    <Article imageUrl={blog04} date="Sep 25, 2021" title="GPT3 and Open AI the future. Let us exlplore how it is?" />
                    <Article imageUrl={blog05} date="Sep 25, 2021" title="GPT3 and Open AI the future. Let us exlplore how it is?" />
                </div>
            </div>
        </div>
    )
}

export default Blog
