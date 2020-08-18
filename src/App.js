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
    currentlyReading: [],
    wantToRead: [],
    read: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then(books=>{
      const currentlyReading = books.filter(book=> book.shelf === "currentlyReading")
      const wantToRead = books.filter(book=> book.shelf === "wantToRead")
      const read = books.filter(book=> book.shelf === "read")
      this.setState({
        currentlyReading,
        wantToRead,
        read,
      })
    })
  }

  updateBook = () => {
    console.log("update succeed!")
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
            currentlyReading={this.state.currentlyReading}
            wantToRead={this.state.wantToRead}
            read={this.state.read}
            updateBook={this.updateBook}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
