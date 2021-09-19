import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        const items = "Developer, Student, 200kg deadlift"
        return (
        <section id="hero" className="d-flex flex-column justify-content-center">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
              <h1 style={{display: "inline"}}>Marc Gruița </h1>
              <a href="mailto:marc@gruita.ro"><h3 style={{display: "inline"}}>marc@gruita.ro</h3></a>
              <p><span className="typed" data-typed-items={items}></span></p>
              <div className="social-links">
                <a href="https://www.github.com/marcgr9" title="Github" className="github"><i className="bx bxl-github bx-lg"></i></a>
                <a href="https://stackoverflow.com/users/10314752/marc-gruita" title="Stackoverflow" className="stack-overflow"><i className="bx bxl-stack-overflow bx-lg"></i></a>
                <a href="http://www.cs.ubbcluj.ro" title="University" className="stack-overflow"><i className="bx bxs-school bx-md"></i></a>
              </div>
            </div>
            <br/>
            <br/>
        
            <div className="section-title">
              <h2>Some bigger projects</h2>
            </div>
          
            <div id="projects"></div>
        </section>
        );
    }
}
 
export default Title;