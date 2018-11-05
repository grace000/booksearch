import React from 'react'
import './styles.css'

const Query = props => (
    <div className="query-wrapper">
        <h1 className="query-title">BookSearch</h1>
        <form className="query-form" onSubmit={props.getBooks}>
            <input 
                className="query-input"
                type ="text" 
                name="search" 
                placeholder="title, author, and/or keyword"
                required
                />
            <button className="query-btn" type="submit">Search</button>
        </form>
    </div>
);
        
export default Query;
