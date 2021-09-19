import React, { Component } from 'react'
import { render } from 'react-dom';
import Title from './Title';

class App extends React.Component {
    render() { 
        return <Title/>
    }
}
 
export default App;

console.log('yessssssss')
render(<App/>, document.getElementById('app'))