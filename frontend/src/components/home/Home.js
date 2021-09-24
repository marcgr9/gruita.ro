import React, { Component } from 'react'
import ProjectList from './Projects';
import Title from './Title';
import { Button } from 'react-bootstrap';

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 500));
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: false
         }
    }

    handleClick = () => {
        this.setState({
            isLoading: true
        });
        simulateNetworkRequest().then(() => {
            this.setState({
                isLoading: false
            });
        });
    }

    render() { 
        return (
             <section id="hero" className="d-flex flex-column justify-content-center">
                <Title/>
                <br/>
                <br/>
                <div id="projects">
                    <div className="section-title">
                        <h2 style={{display: "inline-block"}}>Projects I like</h2>
                        <Button style={{marginLeft: 10, fontSize: "0.7rem"}} disabled={this.state.isLoading} onClick={!this.state.isLoading ? this.handleClick : null} variant="warning">More</Button>
                    </div>
    
                    <ProjectList loaded={this.state.isLoading}/>
                </div>  
    
    
            </section>
        )
    }
}
 
export default Home;