import React, { Component } from 'react';
import Resume from './Resume';
import { Button } from 'react-bootstrap';
import AOS from 'aos';

class ResumeHome extends Component {
    constructor(props) {
        super(props);
        AOS.init({
            duration: 550,
            once: true,
            mirror: false
          })
    }

    changeTheme() {
        document.getElementsByClassName("resume-data")[0].classList.toggle('dark-theme')
        document.getElementsByClassName("resume-data")[0].classList.toggle('light-theme')
        document.getElementsByClassName("btn")[0].classList.toggle('btn-secondary')
        document.getElementsByClassName("btn")[0].classList.toggle('btn-warning')
        
    }

    render() { 
        return ( 
            <section id="resume" className="resume">
                <div className="section-title">
                    <h2 style={{display: 'inline-block'}}>Resume</h2>
                    <Button style={{marginLeft: 10, fontSize: "0.7rem"}} onClick={this.changeTheme} variant="secondary">Change theme</Button>
                </div>
                
                <Resume/>
            </section>
         );
    }
}
 
export default ResumeHome;