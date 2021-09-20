import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { render } from 'react-dom';
import Home from './Home';

class App extends Component {
    render() { 
        return (
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route path='/marc'><div className="hero"></div></Route>
                </Switch>
            </Router>
        )
    }
}
 
export default App;

console.log('yessssssss')
render(<App/>, document.getElementById('app'))