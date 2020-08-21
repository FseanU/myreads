import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import HomePage from './HomePage'
import './App.css'


class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books=>{
      this.setState({
        books
      })
    })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(()=>{
      const oldBooks = this.state.books;
      const oldBooksOneLess = oldBooks.filter(b => b !== book )
      const updatedBook = {...book};
      updatedBook.shelf = shelf;
      const newBooks = [...oldBooksOneLess,updatedBook];
      
      this.setState({
        books: newBooks
      });
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <HomePage 
            books={this.state.books}
            updateBook={this.updateBook}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchPage 
            booksInShelf={this.state.books}
            updateBook={this.updateBook}
          />
        )}/>  
      </div>
    )
  }
}

export default BooksApp
