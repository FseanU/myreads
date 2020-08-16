import React from 'react'

class BookList extends React.Component {
  render() { 
    console.log(this.props.books)
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          <li>
            {(this.props.books.items && <p>No result</p>) || this.props.books.map(book=>( 
              <div className="book" key={book.id}>
                <div className="book-top">
                  <div 
                    className="book-cover"
                    style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}
                  ></div>
                  <div className="book-shelf-charger"></div>
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors && book.authors.map(author=>(
                  <div className="book-authors">{author}</div>
                ))}
              </div>
            ))}
          </li>
        </ol>
      </div>
      
    )
  }
}

export default BookList
// 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
