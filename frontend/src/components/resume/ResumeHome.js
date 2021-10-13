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
        
        this.languages = ["c", "py"]
        
        this.state = {
            languageId: 0
        }
    }

    changeTheme() {
        document.getElementsByClassName("resume-data")[0].classList.toggle('dark-theme')
        document.getElementsByClassName("resume-data")[0].classList.toggle('light-theme')
        document.getElementsByClassName("btn")[0].classList.toggle('btn-secondary')
        document.getElementsByClassName("btn")[0].classList.toggle('btn-light')
    }

    changeLanguage() {
        let { languageId } = this.state
        const n = this.languages.length
        this.setState({
            languageId: (languageId + 1) % n
        })
        document.getElementsByClassName("btn")[1].classList.toggle('btn-warning') 
        document.getElementsByClassName("btn")[1].classList.toggle('btn-success') 
    }

    render() { 
        let { languageId } = this.state

        return ( 
            <section id="resume" className="resume">
                <div className="section-title">
                    <h2 style={{display: 'inline-block'}}>Resume</h2>
                    <Button style={{marginLeft: 10, fontSize: "0.7rem"}} onClick={this.changeTheme} variant="secondary">Theme</Button>
                    <Button style={{position: 'absolute', right: "10%", fontSize: "0.7rem"}} onClick={() => this.changeLanguage()} variant="warning">{this.languages[languageId]}</Button>
                </div>
                
                <Resume language={this.languages[languageId]}/>
            </section>
         );
    }
}
 
export default ResumeHome;