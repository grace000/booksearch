import React, { Component } from 'react'
import './Main.css'
import Query from '../Query/Query'
import Result from '../Result/Result'
import { runQuery } from '../utility/helpers'
import { Link } from 'react-router-dom'


class Main extends Component {
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
        const bookList = data.items;
        this.setState({results:bookList})
      })
      .catch(error => {
          this.setState({errorStatus: "search returned no results"})
      })
  }
  render() {
    const { results, errorStatus } = this.state;
    return (
      <div className="Main">
        <div className="query-container">
          <Query getBooks={this.getBooks} />
          <Link to='/login'>Login</Link>
        </div>
        <div className="results-container">
          {errorStatus && <p>{errorStatus}</p>}
          {results.length === 0 && <p>Start your book search!</p>}
          {results.map(result => <Result 
            key={result.id}
            result={result.volumeInfo}
          />)}
        </div>
      </div>
    );
  }
}

export default Main;
