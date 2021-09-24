import React, { useState, useEffect } from 'react'
import Icon from '../../utils/utils.js';
import Badges from '../../utils/Badges.js';
import { Col } from 'react-bootstrap';


const Project = (props) => {
    const { blob } = props

    const [project, setProject] = useState(props.project);

    useEffect(() => {
        setProject(props.project);
    }, [props.project]);

    const checkLink = (link, title) => {
        return link ? <a href={link}>{title}</a> : title
    }
    
    return (
        <Col md={window.innerWidth > 800 ? 3 : ""} className="services" data-aos="zoom-in" data-aos-delay="200">
            <div className={"icon-box iconbox-" + project.color} style={{ "backgroundColor": "rgba(255, 255, 255, 0.5)", borderRadius: "45px" }}>
                <div className="icon">
                    <svg className="icon-bg" width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" strokeWidth="0" fill="#f5f5f5" d={blob}></path>
                    </svg>
                    <Icon className="icon-fg" name={project.icon}/>
                </div>
                <h4>{checkLink(project.link, project.title)} <Badges languages={project.languages}/></h4>
                <h5>{project.short_description}</h5>
                <h5>{project.long_description}</h5>

                <a href={project.github}>
                    <Icon color="orange" size={38} name={"FaGithub"}/>
                </a>
            </div>
        </Col>
    )
}

export default Project;