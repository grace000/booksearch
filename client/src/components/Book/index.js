import React from 'react'
import './styles.css'
import Author from './components/Author'
import Title from './components/Title'
import BookImage from './components/BookImage'
import Description from './components/Description/index'
import Publisher from './components/Publisher/index'

const Book = ({...props}) => (
    
    <div className="result-wrapper">
      <div className="result-box">
        <div className="result-text">
          <Title {...props} />
          <Author {...props} />
          <Description {...props} />
          <Publisher {...props} />
        </div>
        <BookImage {...props} />
      </div>
    </div>
)

export default Book;
