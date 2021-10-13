import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { APIContext } from '../../utils/context';
import TypedWrapper from '../../utils/TypedWrapper';
import "./Resume.css";
import { FaAngleDoubleDown } from 'react-icons/fa';

//TODO: model & put the whole resume in the db
class Resume extends Component {
    static contextType = APIContext

    constructor(props, context) {
        super(props);
        this.state = { 
            about: ["Born 24 nov. 2001", "marc@gruita.ro", "Cluj-Napoca, Cluj, RO"],
            education: [
                {
                    institution: "Bábes Bolyai University",
                    when: "2020 - present, expected to graduate in 2023",
                    studies: "Bachelor of Computer Sciences"
                },
                {
                    institution: "Tiberiu Popoviciu Computer Science Highschool",
                    when: "2016 - 2020",
                    studies: "Computer Science & mathematics" 
                },
            ],
            awards: [],
            experience: []
         }

        this.syntax = {
            "c": {
                comment: "// ",
                startBracket: " {",
                closeBracket: "}"
            },
            "py": {
                comment: "# ",
                startBracket: ":",
                closeBracket: "\b"
            }
        }
    }

    componentDidMount() {
        const { awards, updateAwards } = this.context

        if (awards.length) {
            this.setState({
                awards
            })
        } else {
            fetch("/api/awards")
                .then(r => r.json())
                .then(r => {
                    updateAwards(r)

                    this.setState({ 
                        awards: r,
                    })
                })
                .catch(e => console.log("mna dar din resume")) 
        }
    }

    hide(e) {
        console.log(e.target)
        let element = e.target;
        while (!element.classList.contains("resume-section")) element = element.parentNode
        element.classList.toggle('hidden')
    }

    render() { 
        let { language } = this.props
        return ( 
            <Container className="resume-data light-theme" data-aos="fade-down" data-aos-delay="200">
                <Row>
                    <Col lg="6">
                        <div className="resume-section">
                            <div className="resume-title">
                                <span className="toggle" onClick={this.hide}><FaAngleDoubleDown/></span>
                                <h1>{this.syntax[language].comment + "Summary"}</h1>
                            </div>
                            <div className="resume-item">
                                <h2>{"Marc-Bogdan Gruița" + this.syntax[language].startBracket}</h2>
                                <ul>
                                    {this.state.about.map(a => 
                                        <li key={"about-" + a}>{a}</li>
                                    )}
                                </ul>
                                <h2>{this.syntax[language].closeBracket}</h2>
                            </div>
                            {/* <p className="padding"/> */}
                        </div>
                        
                        <div className="resume-section">
                            <div className="resume-title">
                                <span className="toggle" onClick={this.hide}><FaAngleDoubleDown/></span>
                                <h1>{this.syntax[language].comment + "Education"}</h1>
                            </div>
                            {
                                this.state.education.map(e => 
                                    <div key={"education-" + e.institution} className="resume-item">
                                        <h2>{e.institution + this.syntax[language].startBracket}</h2>
                                        <h4>{e.when}</h4>
                                        <p><em>{e.studies}</em></p>
                                        <h2>{this.syntax[language].closeBracket}</h2>
                                    </div>
                                )
                            }
                            {/* <p className="padding"/> */}
                        </div>

                        <div className="resume-section">
                            <div className="resume-title">
                                <span className="toggle" onClick={this.hide}><FaAngleDoubleDown/></span>
                                <h1>{this.syntax[language].comment + "Awards & Contests"}</h1>
                            </div>
                            <Awards awards={this.state.awards} wrap={this.syntax[language]}/>
                            {/* <p className="padding"/> */}
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="resume-section">
                        <div className="resume-title">
                            <span className="toggle" onClick={this.hide}><FaAngleDoubleDown/></span>
                            <h1>{this.syntax[language].comment + "Professional Experience"}</h1>
                        </div>
                        <div className="resume-item">
                            <h2>{"Developer intern" + this.syntax[language].startBracket}</h2>
                            <h4>august 2019 - march 2020</h4>
                            <p><em>Hypermedia, Cluj-Napoca, Cluj</em></p>
                            <ul>
                            <li>As I had grade 12 completely free, having been admitted into Bábes Bolyai University a year prior by getting first place in their Computer Science and Mathematematics contest I worked as an intern developer at this company.</li>
                            <li>I did Android development with Kotlin, learning about good coding practices and most importantly about deign patterns.</li>
                            <li>Here I've used extensively the following patterns: MVVM, Observer and MVC.</li>
                            </ul>
                            <h2>{this.syntax[language].closeBracket}</h2>
                        </div>
                        <div className="resume-item">
                            <h2>{"Full stack developer, DPIT Foundation" + this.syntax[language].startBracket}</h2>

                            <div className="dpit-info">
                            <p>The DPIT Foundation, translated as Discover your passion in IT, has organised a way for highschool students to see how work is being done in an IT company.</p>
                            <p>Each highschool's computer science teachers selected a few students which were then split into teams of 4-6, each team "working" at a partenering IT company.</p>
                            <p>Only the students were allowed to do the coding, but each team had a mentor from their company which guided them.</p>
                            <p>The goal was to develop, over summer, an MVP which will then be presented at the final exposition. The theme, technologies used and everything else was up to the students.</p>  
                            </div>
                            
                            <div className="dpit-company">
                                <h3 className="resume-mid-title">3Pillar Global</h3> <h5>Cluj-Napoca, Cluj</h5>
                            </div>
                            <h4>summer 2018 - autumn 2018</h4>
                            <p>We developed an Android application named Dogly, a tinder for dog breeding. :)</p>
                            <ul>
                            <li>Role: team leader, frontend & firebase backend</li>
                            <li>Award: Arobs Transilvania Software special award</li>
                            <li>The app was featured in a local newspaper</li>
                            </ul>

                            <div className="dpit-company">
                                <h3 className="resume-mid-title">Fortech</h3> <h5>Cluj-Napoca, Cluj</h5>
                            </div>
                            <h4>summer 2017 - autumn 2017</h4>
                            <p>We developed an Android application which helped you find the quickest path to your shopping cart in a store.</p>
                            <p>You gave the app the target store & a list of items and it mapped you the shortest path to get each product.</p>
                            <ul>
                            <li>Role: team leader, in-app store map & web app where you can create your store layout</li>
                            <li>Award: 3Pillar Global special award</li>
                            </ul>
                            <h2>{this.syntax[language].closeBracket}</h2>
                        </div>
                        <div className="resume-item">
                            <h2>{"Java developer" + this.syntax[language].startBracket}</h2>
                            <h4>2014 - 2015</h4>
                            <p><em>My own Minecraft server</em></p>
                            <p>I owned a pretty successful Minecraft server where I implemented my own custom features in Java.</p>
                            <div className="last-line-typed">
                                <p style={{display: 'table-cell'}}>This was my first experi</p>
                                <TypedWrapper style={{display: 'table-cell'}} strings={["ence with programming. :)"]}/>
                            </div>
                            <h2>{this.syntax[language].closeBracket}</h2>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        ); 
    }
}

const Awards = (props) => {
    let { awards } = props
    awards.sort((a, b) => b.year - a.year)

    let to_render = awards.map(a => 
        <div key={"award-" + a.contest} className="resume-item">
            <h2>{a.contest + props.wrap.startBracket}</h2>
            <h4>{a.year}</h4>
            <p><b>{a.award}</b></p>
            {
                getListFromString(a.description)
            }
            <h2>{props.wrap.closeBracket}</h2>
        </div>    
    )

    return to_render ? to_render : null;
}

const getListFromString = (str) => {
    if (str.includes("{") && str.includes("}")) {
        const items = str.split("{").pop().split("}")[0]
        return (
            <div className="list-from-string">
                <p>{str.split("{")[0]}</p>
                <ul>
                    {
                    items.split(", ").map(li => 
                        <li key={"item-" + li}>{li}</li>
                        )
                    }
                </ul>
            </div>
        )
    } else return <p>{str}</p>
}


 
export default Resume;