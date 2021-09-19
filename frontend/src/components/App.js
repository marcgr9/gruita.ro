import React, { Component } from 'react'
import { render } from 'react-dom';

class App extends React.Component {
    render() { 
        return <div>Salutare</div>;
    }
}
 
export default App;

console.log('yes')
render(<App/>, document.getElementById('app'))