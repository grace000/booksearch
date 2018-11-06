import React, { Component } from 'react'
import './App.css'
import Home from './scenes/Home'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'



export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          <Route>
           <Home />
          </Route>
        </Router>
      </div>
    )
  }
}
