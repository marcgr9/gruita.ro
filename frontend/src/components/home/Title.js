import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import TypedWrapper from '../../utils/TypedWrapper';

import { FaGithub, FaStackOverflow, FaUniversity} from 'react-icons/fa';

class Title extends React.Component {
    constructor(props) {
        super(props)

        AOS.init({
            duration: 350,
            once: true,
            mirror: false
          })
    }
    render() { 
        const items = ["Developer", "Student", "200kg deadlift"]
        const inline = { display: "inline" };

        return (
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
              <h1 style={inline}>Marc Gruița </h1>
              <a href="mailto:marc@gruita.ro"><h3 style={inline}>marc@gruita.ro</h3></a>
              <TypedWrapper strings={items}/>
              <div className="social-links">
                <a href="https://www.github.com/marcgr9" title="Github" className="github"><FaGithub/></a>
                <a href="https://stackoverflow.com/users/10314752/marc-gruita" title="Stackoverflow" className="stack-overflow"><FaStackOverflow/></a>
                <a href="http://www.cs.ubbcluj.ro" title="University" className="stack-overflow"><FaUniversity/></a>
              </div>
            </div>
        );
    }
}
 
export default Title;