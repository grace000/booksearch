import React, { Component } from 'react';
import './App.css';
import Query from './components/Query/Query';
import Result from './components/Result/Result';
import { runQuery } from './components/utility/helpers';

class App extends Component {
  state = {
    results:[]
  }

  getBooks = (e) => {
    e.preventDefault();
    const term = e.target.elements.search.value;
    e.target.reset();

    runQuery(term).then(data => {
      this.setState({results:[]})
      const bookList = data.items;
      console.log(bookList);
      this.setState({results:bookList})
    })
  }
  render() {
    const { results } = this.state;
    return (
      <div className="App">
        <div className="query-container">
          <Query getBooks={this.getBooks} />
        </div>
        <div className="results-container">
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

export default App;
