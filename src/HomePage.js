import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  filterBookByShelf = (books, shelfName) => {
    return books.filter(book=> book.shelf === shelfName);
  }

  render() {
    const {updateBook, books} = this.props;
    const shelves = {
      currentlyReading: ['Currently Reading', 'currentlyReading'],
      wantToRead: ['Want to Read', 'wantToRead'],
      read: ['Read', 'read']
    }
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {Object.entries(shelves).map(([key, value]) => (
              <BookShelf 
                key={key}
                shelfInfo={value}
                allBooks={books}
                updateBook={updateBook}
              />
            ))}
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