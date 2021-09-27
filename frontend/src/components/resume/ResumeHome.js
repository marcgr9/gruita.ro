import React, { Component } from 'react';
import Resume from './Resume';
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

    render() { 
        return ( 
            <section id="resume" className="resume">
                <div className="section-title">
                    <h2>Resume</h2>
                </div>
                
                <Resume/>
            </section>
         );
    }
}
 
export default ResumeHome;