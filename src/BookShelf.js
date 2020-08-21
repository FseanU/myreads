import React from 'react'
import BookList from './BookList'

class BookShelf extends React.Component {
  render() {
    const { shelf, shelfName, updateBook } = this.props;
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <BookList 
            books={shelf} 
            updateBook={updateBook}
          />
        </div>
      </div>
    )
  }
}

export default BookShelf