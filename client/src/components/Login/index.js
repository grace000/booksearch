import React from 'react'
import { Link } from "react-router-dom"
import './styles.css'


const Login = ({isAuthenticated}) => (
  <div className="auth-links">
    { isAuthenticated ? 
      <div>
        <ul>
          <li className="logged-nav-item">
            <Link to='/savedbooks'>SavedBooks</Link>
          </li>
          <li className="logged-nav-item">
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </div> : 
      <div className="login-link">
        <a href="/login">Login</a>
      </div> 
    }
  </div>
)

export default Login;