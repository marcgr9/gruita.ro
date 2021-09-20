import React, { useState, useEffect } from 'react'
import ProjectList from './Projects';
import Title from './Title';
import { Button } from 'react-bootstrap';
import { refresh } from 'aos';

function useRefresh() {
    const [value, setValue] = useState(true)
    return () => setValue(!value)
}

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 500));
  }

const Home = (props) => {
    const refresh = useRefresh()
    const [isLoading, setLoading] = useState(false);

    // useEffect(() => {
    //     if (isLoading) {
    //         simulateNetworkRequest().then(() => {
    //             setLoading(false);
    //         });
    //     }
    // }, [isLoading]);

    const handleClick = () => {
        setLoading(true);   
        simulateNetworkRequest().then(() => {
            setLoading(false);
        });
    }

    return (
        <section id="hero" className="d-flex flex-column justify-content-center">
            <Title/>
            <br/>
            <br/>
            <div id="projects">
                <div className="section-title">
                    <h2 style={{display: "inline"}}>Some bigger projects</h2>
                    <Button style={{marginLeft: 10, fontSize: "0.7rem"}} disabled={isLoading} onClick={!isLoading ? handleClick : null} variant="warning">More</Button>
                </div>

                <ProjectList/>
            </div>  


        </section>
    )
}

export default Home;