import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import HomePage from './HomePage'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // currentlyReading: [],
    // wantToRead: [],
    // read: [],
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then(books=>{
      this.setState({
        books
      })
    })
  }

  updateBook = (book, shelf) => {
    console.log("update succeed!")
    BooksAPI.update(book, shelf).then(bookIds=>{
      const oldBooks = this.state.books;
      console.log('oldBooks',oldBooks)
      const oldBooksOneLess = oldBooks.filter(b => (b !== book) )
      console.log('oldBooksOneLess', oldBooksOneLess)
      const updatedBook = book;
      updatedBook.shelf = shelf;
      const newBooks = oldBooksOneLess.push(updatedBook);
      console.log('newBooks',newBooks)
      
      // this.setState({
      //   books: newBooks
      // })
      console.log(book.shelf)
      // const updatedBook = BooksAPI.get(bookID)

    }

    )
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div>
            <SearchPage />
            <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
          </div>
        ) : (
          <HomePage 
            books={this.state.books}
            updateBook={this.updateBook}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
