import React from 'react';
import { Button } from 'react-bootstrap';

const Badges = props => {
    const languages = props.languages.replace(/\s+/g, '').split(',')

    const variants = {
        'py': 'success',
        'c++': 'warning',
        'c': 'warning',
        'c#': 'warning',
        'js': 'danger',
        'kt': 'warning',
        'bash': 'success',
    }
    
    const to_render = languages.map(l => 
        <Button style={{fontSize: "0.6em"}} disabled={true} variant={variants[l]}>{l}</Button>
    )
    console.log(to_render)
    return (
        <div style={{display: "inline"}}>
            {to_render}
        </div>
    )
}

export default Badges;