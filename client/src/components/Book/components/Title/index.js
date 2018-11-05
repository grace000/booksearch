import React from 'react'

const Title = ({ result }) => (
    <div>
        {
            result.infoLink && result.title &&
            <h3>
            <a className="title" href={result.infoLink} target="none">
                {result.title}
            </a>
            </h3>
        }
    </div>
)

export default Title;