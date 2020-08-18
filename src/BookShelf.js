import React from 'react'
import BookList from './BookList'

class BookShelf extends React.Component {
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <BookList 
            books={this.props.shelf} 
            updateBook={this.props.updateBook}
          />
        </div>
      </div>
    )
  }
}

export default BookShelf