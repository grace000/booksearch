import React from 'react'

const Description = ({ result }) => (
    <div>
        {
            result.description &&
            <p className="search-snippet">{result.description.slice(0,150)}...</p>
        }
    </div>
)

export default Description;
