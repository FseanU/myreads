import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  filterBookByShelf = (books, shelfName) => {
    return books.filter(book=> book.shelf === shelfName);
  }

  render() {
    const {updateBook, books} = this.props;
    const currentlyReading = this.filterBookByShelf(books, 'currentlyReading')
    const wantToRead = this.filterBookByShelf(books, 'wantToRead')
    const read = this.filterBookByShelf(books, 'read')
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
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default HomePage