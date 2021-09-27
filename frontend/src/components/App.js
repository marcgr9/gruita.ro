import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { render } from 'react-dom';
import Home from './home/Home';
import Header from "./Header"
import TechsHome from './technologies/TechsHome';

class App extends Component {
    render() { 
        return (
            <div>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path='/'>
                            <Home/>
                        </Route>
                        <Route path='/marc'>
                            <TechsHome/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
 
export default App;

console.log('yessssssss')
render(<App/>, document.getElementById('app'))