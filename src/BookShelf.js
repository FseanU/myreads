import React from 'react'
import BookList from './BookList'

class BookShelf extends React.Component {
  filterBookByShelf = (books, shelfName) => {
    return books.filter(book=> book.shelf === shelfName);
  }
  render() {
    const { shelfInfo, allBooks, updateBook } = this.props;
    const books = this.filterBookByShelf(allBooks, shelfInfo[1])
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfInfo[0]}</h2>
        <div className="bookshelf-books">
          <BookList 
            books={books} 
            updateBook={updateBook}
          />
        </div>
      </div>
    )
  }
}

export default BookShelf