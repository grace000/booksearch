import React from 'react'

const BookImage = ({ result }) => (
    <div className="result-image">
    {
      result.imageLinks && 
      (
        <img src={result.imageLinks.smallThumbnail} alt="" />
      )
    }
  </div>
)

export default BookImage;