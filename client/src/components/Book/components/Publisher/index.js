import React from 'react'

const Publisher = ({ result }) => (
   <div>
        {
            result.publisher && 
            <p className="publisher">{result.publisher}</p>
        }
   </div>
)

export default Publisher;