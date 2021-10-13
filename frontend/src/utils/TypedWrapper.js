import React, { Component } from 'react';
import Typed from 'typed.js'

class TypedWrapper extends React.Component {
    componentDidMount() {
        const { strings } = this.props;
        const options = {
            strings: strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        };

        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        this.typed.destroy();
    }

    render() {
        const { style } = this.props;
        return (

        <div style={style} className="type-wrap">
            <p>
                <span ref={(el) => {this.el = el;}}/>
            </p>
        </div>
        );
        }
    }

export default TypedWrapper;