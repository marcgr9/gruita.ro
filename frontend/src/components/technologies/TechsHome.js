import React, { Component } from 'react';
import Technologies from './Technologies';

class TechsHome extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
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