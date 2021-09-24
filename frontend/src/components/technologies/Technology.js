import React from 'react';
import { FaChevronRight, FaLink } from 'react-icons/fa'

const Technology = (props) => {
    const { tech } = props
    return (
        <li>
            <FaChevronRight/>
            <strong>{tech.name + ": "}</strong>
                <span>{tech.description}</span>
            <br/>
            { tech.project ? 
                <div id="tech-project">
                    <a href={tech.link}>
                        <FaLink/> 
                    </a>
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

export default Technology;