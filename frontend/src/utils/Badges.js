import React from 'react';
import { Button } from 'react-bootstrap';

const Badges = props => {
    let { languages } = props

    if (typeof languages === "string")
        languages = props.languages.replace(/\s+/g, '').split(',')

    const variants = {
        'py': 'success',
        'c++': 'warning',
        'c': 'warning',
        'c#': 'warning',
        'js': 'danger',
        'kt': 'warning',
        'bash': 'success',
    }
    
    const to_render = languages.filter(l => l).map(l => 
        <Button style={{fontSize: "0.7rem"}} disabled={true} variant={variants[l]}>{l}</Button>
    )
    return (
        <div style={{display: "inline"}}>
            {to_render}
        </div>
    )
}

export default Badges;