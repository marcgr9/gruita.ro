import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { render } from 'react-dom';
import Home from './home/Home';
import Header from "./Header"
import TechsHome from './technologies/TechsHome';
import ResumeHome from './resume/ResumeHome';
import { APIContextProvider } from '../utils/context';

class App extends Component {
    setProjects = p => {
        this.setState({ projects: p })
    }
    render() { 
        return (
            <APIContextProvider>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path='/'>
                            <Home/>
                        </Route>
                        <Route path='/marc'>
                            <TechsHome/>
                        </Route>
                        <Route path='/resume'>
                            <ResumeHome/>
                        </Route>
                    </Switch>
                </Router>
            </APIContextProvider>
        )
    }
}
 
export default App;

render(<App/>, document.getElementById('app'))