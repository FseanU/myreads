import React from 'react'
import Book from './Book'

class BookList extends React.Component {
  onUpdateBook = (e, book) => {
    const shelf = e.target.value;
    this.props.updateBook(book, shelf)
  }

  render() { 
    console.log(this.props.books)
    return (
      <ol className="books-grid">
          {(this.props.books.items && <li>No result</li>) || this.props.books.map(book=>( 
            <Book key={book.id} book={book}/>
          ))}
      </ol>
    )
  }
}

export default BookList
// 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
