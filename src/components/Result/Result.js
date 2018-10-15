import React, { Component } from 'react'
import './Result.css'

export default class Result extends Component {
  render() {
    const { result } = this.props;
    return (
      <div className="result-wrapper">
        <div className="result-box">
          <div className="result-text">
            {
              result.infoLink && result.title &&
              <h3>
                <a className="title" href={result.infoLink} target="none">
                    {result.title}
                </a>
              </h3>
            }
            {
              result.authors && 
              <ul className="author">{result.authors.map(author =>
                <li key={author}>
                    <a href={`https://google.com/search?q=+${author}`} target="none">{author}</a>
                </li>)}
              </ul>
            }
            {
              result.description &&
              <p className="search-snippet">{result.description.slice(0,150)}...</p>
            }
            {
              result.publisher && 
              <p className="publisher">{result.publisher}</p>
            }
          </div>
          <div className="result-image">
            {
              result.imageLinks.smallThumbnail &&
              <img src={result.imageLinks.smallThumbnail} alt=""/>
            }
          </div>
        </div>
      </div>
    )
  }
}
