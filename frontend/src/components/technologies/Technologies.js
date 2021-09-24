import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Badges from '../../utils/Badges';
import Technology from './Technology'


class Technologies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            technologies: []
        }
    }

    componentDidMount() {
        fetch("/api/technologies")
            .then(r => r.json())
            .then((r) => {
                console.log(r)
                this.setState({ 
                    technologies: r,
                })
            })
            .catch(e => console.log("mna din techs"))
    }

    groupTechnologies() {
        console.log('grouped')
        const { technologies } = this.state
        let categories = {}
        let languages_set = new Set()


        technologies.forEach(t => {
            // parse languages
            const languages = t.languages.replace(/\s+/g, '').split(',')
            languages.forEach(l => {
                languages_set.add(l)
            })

            // sort projects by category
            const { category, ...tech_without_category } = t

            categories[category] = categories.hasOwnProperty(category) ?
                [ ...categories[category], tech_without_category ]
                : [ tech_without_category ]
        })

        return {
            categories,
            languages_set
        }
    }


    render() {
        const { languages_set, categories } = this.groupTechnologies()
        const n = Object.keys(categories).length
        const half = n / 2 | 0
        
        let to_render = {}
        for (const k of Object.keys(categories)) to_render[k] = []

        for (const [k, v] of Object.entries(categories)) {
            let _ = v.map(t => <Technology tech={t}/>)
            to_render[k] = [...to_render[k], ..._]
        }

        let techs = []

        let col1 = <Col></Col>
        let col2

        Object.keys(to_render).forEach(k => {
            techs = [...techs, 
                <div className="tech-category">
                    <h3 className="title">{k}</h3>
                    <ul>
                        {to_render[k]}
                    </ul>
                </div>
                ]
            })

        techs.splice(half, 0, 
            <div className="tech-category">
                <h3 className="title">Languages</h3>
                <Badges languages={Array.from(languages_set)}/>
            </div>
        )

        if (n > 3) {
            col1 = <Col children={techs.slice(0, half)}/>
            col2 = <Col children={techs.slice(half)} />
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

export default Technologies;