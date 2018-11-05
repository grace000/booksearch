import React from 'react'
import SaveButton from '../SaveButton/index';

const BookImage = ({ result, isAuthenticated, id }) => (
    <div className="result-image">
    {
      result.imageLinks && 
      (
        <img src={result.imageLinks.smallThumbnail} alt="" />
      )
    }
    {
      result.image && 
      (
        <img src={result.image} alt="" />
      )
    }
    <SaveButton isAuthenticated={isAuthenticated} result={result} id={id}/>
  </div>
)

export default BookImage;