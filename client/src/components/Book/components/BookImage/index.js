import React from 'react'

const BookImage = ({ result }) => (
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
  </div>
)

export default BookImage;