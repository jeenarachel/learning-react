import React from 'react'
import './App.css'
import Header from './../Header/Header.js'
import Search from './../Search/Search.js'
import ResultsContainer from './../ResultsContainer/ResultsContainer.js'

const name = require('@rstacruz/startup-name-generator')

class App extends React.Component {

    state = {
        enlarged: true,
        suggested: []
    }

    handleInputChange = (inputText) => {
        this.setState({ enlarged: !inputText })
        this.setState({ suggested: inputText ? name(inputText) : [] })
    }

    render() {
        return (
            <div>
                <Header enlarged={this.state.enlarged} />
                <Search onChange={this.handleInputChange} />
                <ResultsContainer suggested={this.state.suggested} />
            </div>
        )
    }
}

export default App