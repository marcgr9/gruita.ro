import React, { Component } from 'react';
import Technologies from './Technologies';
import AOS from 'aos';

class TechsHome extends Component {
    constructor(props) {
        super(props);
        AOS.init({
            duration: 350,
            once: true,
            mirror: false
          })
    }

    render() { 
        return ( 
            <section id="technologies">
                <div className="section-title">
                    <h2>Technologies used</h2>
                </div>
                
                <Technologies/>
            </section>
         );
    }
}
 
export default TechsHome;