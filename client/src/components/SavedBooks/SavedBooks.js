import React, { Component } from 'react'
import { getUserBooks, deleteBook } from '../utility/helpers'

export default class SavedBooks extends Component {
    state = {
        savedBooks: []
    }
    
    componentDidMount= () => {
        getUserBooks().then(response=>{
            console.log(response.data);
            const userBooks = response.data;
            this.setState({savedBooks:userBooks});
        });
    }

    handleDeleteClick = (book) => {
        deleteBook(book._id).then(() => {
            console.log(book._id);
        })
    }

    render() {
        const { savedBooks } = this.state;
        const renderBooks = savedBooks.map(book => <div key={book.id}>
            <p>{book.description}</p>
            <p>{book.id}</p>
            <p>{book.title}</p>
        </div>)
        console.log(savedBooks);
    return (
      <div>
          {renderBooks}
      </div>
    )
  }
}
