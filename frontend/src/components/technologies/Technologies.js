import React, { Component } from 'react';
import { BiChevronRight } from 'react-icons/bi'
import { Container, Row, Col } from 'react-bootstrap'
import { FaChevronRight, FaLink } from 'react-icons/fa'
import { Link } from 'react-router-dom';

class Technologies extends Component {
    // componentDidMount() {
        // technologies = [
        //     {title: "Android development", description: "Developed diverse android apps for contests, work and as a hobby"},
        //     {title: "p5.js & Processing sketches", description: "Messed with it since I discovered <a href=\"https://www.youtube.com/c/TheCodingTrain/featured\">Daniel</a> on youtube back in 2017 :)"},
        //     {title: "pygame", description: "Uni assignments like <a href=\"https://github.com/marcgr9/py_battleships\">py-battleships</a>"},
        //     {title: "Unix shell scripting & unix C stuff", description: "<a href=\"https://github.com/marcgr9/timely.git\">Timely</a> unix/macOS utility"},
        //     {title: "QT C++", description: "Some small uni projects like <a href=\"https://github.com/marcgr9/table-sweepers\">this</a> multiplayer Minesweeper"},
        //     {title: "Ford Focus APIM & IPC software mods", description: "it's awful. but I learned some things about CAN-BUS communication & how Ford managed their in-car software"},
        // ]
        technologies = [
            {category: "mobile", language: "kt", what: "Android development", description: "Developed diverse android apps for contests, work and as a hobby", project: "HackTheVirus Hackathon", link: "https://github.com/marcgr9/hackthevirus"},
            {category: "frontend", language: "js", what: "p5.js / Processing", description: "Small games & sketches", project: "Grade 12 CS Cert project", link: "https://github.com/marcgr9/CS-cert-project"},
            {category: "frontend", language: "py", what: "pygame", description: "", project: "PyBattleships", link: "https://github.com/marcgr9/py_battleships"},
            {category: "frontend", language: "c++", what: "QT Framework", description: "Uni projects", project: "TableSweepers", link: "https://github.com/marcgr9/table-sweepers"},
            {category: "backend", language: "", what: "Firebase", description: "Nearly all the apps I made for contests used Firebase as the backend", project: "", link: ""},
            {category: "backend", language: "py", what: "Django", description: "", project: "This website", link: "https://github.com/marcgr9/gruita.ro-django-react"},            
            {category: "misc", language: "c++", what: "Ford IPC Mods", description: "Messed with a ford IPC, unpacing their .vbf files and changind asbuilt hex data", project: "My proudest moment", link: "https://github.com/marcgr9/gruita.ro-django-react"},            
            {category: "misc", language: "bash,c", what: "Bash", description: "", project: "Timely", link: "https://github.com/marcgr9/timely"},            
        ]
    // }


    render() {
        const languages = ["kt", "js", "c++", "c", "py", "bash"]
        const categories = {
            "mobile": [
                {
                "what": "Android dev",
                "desc": "Developed plm",
                "project": "mda",
                "link": "abcde"
                }
            ], 
            "frontend": [ 
                {
                    "what": "p5 1",
                    "desc": "Developed plm",
                    "project": "mda",
                    "link": "abcde"
                },
                {
                    "what": "p5 2",
                    "desc": "Developed plm 2",
                    "project": "mda fiehw",
                    "link": "abcde"
                }
            ], "backend": [
                {
                    "what": "p5 3",
                    "desc": "Developed plm 2",
                    "project": "mda fiehw",
                    "link": "abcde"
                }
            ], "misc": [
                {
                    "what": "p5 4",
                    "desc": "Developed plm 2",
                    "project": "",
                    "link": "abcde"
                }
                
            ]
        }
        const n = Object.keys(categories).length
        const half = n / 2 | 0
        

        let to_render = {}
        for (const k of Object.keys(categories)) to_render[k] = []

        for (const [k, v] of Object.entries(categories)) {
            let _ = v.map(t => <Tech tech={t}/>)
            to_render[k] = [...to_render[k], ..._]
        }

        let techs = []

        let col1 = <Col></Col>
        let col2

        

        Object.keys(to_render).forEach(k => {
            techs = [...techs, 
                <div>
                    <h3 className="title">{k}</h3>
                    <ul>
                        {to_render[k]}
                    </ul>
                </div>
                ]
            })
        

        if (n > 3) {
            col2 = <Col children={techs.slice(0, half)}/>
            col1 = <Col children={techs.slice(half)} />
        } else {
            col1 = <Col children={techs}/>
            col2 = []
        }
        

        return ( 
            <Container className="justify-content-center technologies">
                <Row className="content">
                    {col1}
                    {col2}
                </Row>
            </Container>
         );
    } 
}
//2-5 5-9

const Tech = (props) => {
    const { tech } = props
    return (
        <li>
            <FaChevronRight/>
            <strong>{tech.what + ": "}</strong>
                <span>{tech.desc}</span>
            <br/>
            { tech.project ? 
                <div id="tech-project">
                    <Link to={tech.link}>
                        <FaLink/> 
                    </Link>
                    <span>
                        {tech.project}
                    </span>
                </div>
                       : 
                []
            }
        </li>
    )
}

export default Technologies;