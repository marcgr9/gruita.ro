import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { APIContext } from '../../utils/context';

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

    render() { 
        return ( 
            <Container data-aos="fade-down" data-aos-delay="200">
                <Row>
                    <Col lg="6">
                        <h3 className="resume-title">Summary</h3>
                        <div className="resume-item pb-0">
                            <h4>Marc-Bogdan Gruița</h4>
                            <ul>
                                {this.state.about.map(a => 
                                    <li key={"about-" + a}>{a}</li>
                                )}
                            </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        {
                            this.state.education.map(e => 
                                <div key={"education-" + e.institution} className="resume-item">
                                    <h4>{e.institution}</h4>
                                    <h5>{e.when}</h5>
                                    <p><em>{e.studies}</em></p>
                                </div>
                            )
                        }

                        <h3 className="resume-title">Awards & contests</h3>
                        <Awards awards={this.state.awards}/>
                    </Col>
                    <Col lg="6">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>Developer intern</h4>
                            <h5>august 2019 - march 2020</h5>
                            <p><em>Hypermedia, Cluj-Napoca, Cluj</em></p>
                            <ul>
                            <li>As I had grade 12 completely free, having been admitted into Bábes Bolyai University a year prior by getting first place in their Computer Science and Mathematematics contest I worked as an intern developer at this company.</li>
                            <li>I did Android development with Kotlin, learning about good coding practices and most importantly about deign patterns.</li>
                            <li>Here I've used extensively the following patterns: MVVM, Observer and MVC.</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Full stack developer, DPIT Foundation</h4>

                            <div className="dpit-info">
                            <p>The DPIT Foundation, translated as Discover your passion in IT, has organised a way for highschool students to see how work is being done in an IT company.</p>
                            <p>Each highschool's computer science teachers selected a few students which were then split into teams of 4-6, each team "working" at a partenering IT company.</p>
                            <p>Only the students were allowed to do the coding, but each team had a mentor from their company which guided them.</p>
                            <p>The goal was to develop, over summer, an MVP which will then be presented at the final exposition. The theme, technologies used and everything else was up to the students.</p>  
                            </div>
                            
                            <h3 style={{display: 'inline'}} className="resume-mid-title">3Pillar Global</h3> <p style={{display: 'inline'}}>Cluj-Napoca, Cluj</p>
                            <h5 style={{display: 'block'}}>summer 2018 - autumn 2018</h5>
                            <p>We developed an Android application named Dogly, a tinder for dog breeding. :)</p>
                            <ul>
                            <li>Role: team leader, frontend & firebase backend</li>
                            <li>Award: Arobs Transilvania Software special award</li>
                            <li>The app was featured in a local newspaper</li>
                            </ul>

                            <h3 style={{display: 'inline'}} className="resume-mid-title">Fortech</h3> <p style={{display: 'inline'}}>Cluj-Napoca, Cluj</p>
                            <h5 style={{display: 'block'}}>summer 2017 - autumn 2017</h5>
                            <p>We developed an Android application which helped you find the quickest path to your shopping cart in a store.</p>
                            <p>You gave the app the target store & a list of items and it mapped you the shortest path to get each product.</p>
                            <ul>
                            <li>Role: team leader, in-app store map & web app where you can create your store layout</li>
                            <li>Award: 3Pillar Global special award</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Java developer</h4>
                            <h5>2014 - 2015</h5>
                            <p><em>My own Minecraft server</em></p>
                            <p>I owned a pretty successful Minecraft server where I implemented my own custom features in Java.</p>
                            <p>This was my first experience with programming :).</p>
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
            <h4>{a.contest}</h4>
            <h5>{a.year}</h5>
            <p><b>{a.award}</b></p>
            {
                getListFromString(a.description)
            }
        </div>    
    )

    return to_render ? to_render : null;
}

const getListFromString = (str) => {
    if (str.includes("{") && str.includes("}")) {
        const items = str.split("{").pop().split("}")[0]
        return (
            <div id="list-from-string">
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