import React, { Component } from 'react'
import './App.css'
import SavedBooks from './scenes/SavedBooks'
import Home from './scenes/Home'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import axios from 'axios'

const ProtectedRoute = ({ component: Comp, isAuthenticated, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        return isAuthenticated ? <Comp {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};


export default class App extends Component {
  state = {
    isAuthenticated: false
  }

  checkAuthentication = () => {
    axios.get('/user').then(response => {
      if (response.data.userAvailable === "false") {
        this.setState({
          isAuthenticated: false
        })
      } else {
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
            <Route exact path="/" 
                    render={(props) => <Home {...props} isAuthenticated={this.state.isAuthenticated} />}/>
            <ProtectedRoute path="/savedbooks" isAuthenticated={this.state.isAuthenticated} component={SavedBooks} />
          </div>
        </Router>
      </div>
    )
  }
}
