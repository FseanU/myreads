import React from 'react'
import BookShelf from './BookShelf'

class HomePage extends React.Component {
  render() {
    const {updateBook, books} = this.props;
    const currentlyReading = books.filter(book=> book.shelf === "currentlyReading");
    const wantToRead = books.filter(book=> book.shelf === "wantToRead");
    const read = books.filter(book=> book.shelf === "read");
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf 
              shelfName={"Currently Reading"} 
              shelf={currentlyReading}
              updateBook={updateBook}
            />

            <BookShelf 
              shelfName={"Want to Read"} 
              shelf={wantToRead}
              updateBook={updateBook}
            />
            
            <BookShelf 
              shelfName={"Read"} 
              shelf={read}
              updateBook={updateBook}
            />
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>
    )
  }
}

export default HomePage