import React, { Component } from 'react'
import { getUserBooks } from '../../services/utility/helpers'
import Book from '../../components/Book/index';
import { Link } from "react-router-dom";
import './styles.css'

export default class SavedBooks extends Component {
    state = {
        savedBooks: []
    }
    
    componentDidMount= () => {
        getUserBooks().then(response=>{
            const userBooks = response.data;
            this.setState({savedBooks:userBooks});
        });
    }

    render() {
        const { savedBooks } = this.state;
    return ( 
      <div className="SavedBooks">          
        <div className="header-container">
            <h1 className="mybooks-title">MyBooks</h1>
            <Link to="/">Back to BookSearch</Link>
        </div>
        <div className="books-container">
            {savedBooks && savedBooks.map(result => 
                <Book key={result.id} result={result}/>
            )}
        </div>
      </div>
    )
  }
}
