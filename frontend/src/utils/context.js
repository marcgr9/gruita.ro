import React, { Component } from "react";

export const APIContext = React.createContext();

class APIContextProvider extends Component {
    state = {
        projects: [],
        technologies: [],
        awards: [],
    }

    updateProjects = projects => {
        this.setState({
            projects
        })
    }

    updateTechnologies = technologies => {
        this.setState({
            technologies
        })
    }

    updateAwards = awards => {
        this.setState({
            awards
        })
    }

    render() {
        return (
            <APIContext.Provider value={{...this.state, 
                    updateProjects: this.updateProjects,
                    updateTechnologies: this.updateTechnologies,
                    updateAwards: this.updateAwards }}>
                {this.props.children}
            </APIContext.Provider>
        )
    }
}

export { APIContextProvider };

// export const TContext = React.createContext('salut');