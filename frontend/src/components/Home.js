import React, { Component } from 'react'
import ProjectList from './Projects';
import Title from './Title';

const Home = (props) => {

    return (
        <section id="hero" className="d-flex flex-column justify-content-center">
            <Title/>
            <br/>
            <br/>
            <div id="projects">
                <div className="section-title">
                    <h2>Some bigger projects</h2>
                </div>
                <ProjectList/>
            </div>  


        </section>
    )
}

export default Home;