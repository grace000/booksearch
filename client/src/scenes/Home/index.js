import React, { Component } from 'react';
import './styles.css';
import Query from '../../components/Query';
import Book from '../../components/Book';
import { runQuery } from '../../services/utility/helpers';
import Login from '../../components/Login/index';

class Home extends Component {
  state = {
    results:[],
    errorStatus: undefined
  }

  getBooks = (e) => {
    e.preventDefault();
    const term = e.target.elements.search.value;
    e.target.reset();

    runQuery(term)
      .then(data => {
        this.setState({results:[]})

        if (data.totalItems === 0){
          this.setState({
            results:null,
            errorStatus: `Sorry, no results from search: ${term} 🤔`
          })
        } else {
          const bookList = data.items;
          this.setState({
            results:bookList,
            errorStatus: undefined
          })
        }
        
      })
  }
  render() {
    const { results, errorStatus } = this.state;
  
    return (
      <div className="Home">
        <div className="query-container">
          <Query getBooks={this.getBooks} />
          <div className="login-container">
            <Login isAuthenticated={this.props.isAuthenticated}/>
          </div>
        </div>
        <div className="books-container">
          <p>{errorStatus}</p>
          {results && results.length === 0 && <p>Start your book search!</p>}
          {results && results.map(result => 
            <Book 
              key={result.id}
              id={result.id}
              result={result.volumeInfo}
              isAuthenticated={this.props.isAuthenticated}
          />)}
        </div>
      </div>
    );
  }
}

export default Home;
