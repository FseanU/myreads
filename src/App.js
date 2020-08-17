import React from 'react'
// import * as BooksAPI from './BooksAPI'
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
    currReading: [
      {
        authors: ["Harold Bloom"],
        id: "Jhw9Bg42pSMC",
        imageLinks: {
          thumbnail: "http://books.google.com/books/content?id=Jhw9Bg42pSMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        title: "Leo Tolstoy"
      }
    ],
    wantToRead: [
      {
        authors: ["Ronald Victor Sampson"],
        id: "f8sjAAAAMAAJ",
        imageLinks: {
          thumbnail: "http://books.google.com/books/content?id=f8sjAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        title: "Tolstoy: the discovery of peace"
      }
    ],
    read: [],
    showSearchPage: true
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
            currReading={this.state.currReading}
            wantToRead={this.state.wantToRead}
            read={this.state.read}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
