import React, { Component } from 'react'
import './App.css'
import Main from './components/Main/Main'
import SavedBooks from './components/SavedBooks/SavedBooks'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import axios from 'axios'

export default class App extends Component {
  state = {
    isAuthenticated: false
  }

  checkAuthentication = () => {
    axios.get('/oauth2callback').then(response => {
      if (response.data.userAvailable === "false") {
        console.log("no user available");
        this.setState({
          isAuthenticated: false
        })
      } else {
        console.log("user available");
        this.setState({
          isAuthenticated: true
        })
      }
    })
  }
  
  componentDidMount() {
    this.checkAuthentication();
  }
  

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Main}/>
            <Route path="/user" component={SavedBooks}/>
          </div>
        </Router>
      </div>
    )
  }
}