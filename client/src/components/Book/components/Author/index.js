import React from 'react'

const Author = ({ result} ) => (
    <div>
       {
            result.authors && 
            <ul className="author">{result.authors.map(author =>
            <li key={author}>
                <a href={`https://google.com/search?q=+${author}`} target="none">{author}</a>
            </li>)}
            </ul>
        }
    </div>
)

export default Author;