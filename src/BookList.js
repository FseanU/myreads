import React from 'react'

class BookList extends React.Component {
  render() { 
    return (
      <div>
        {console.log(this.props.books)}
        {this.props.books.map(book=>( 
          <div key={book.id}>
            <p>{book.title}</p>
            {book.authors && book.authors.map(author=>(
              <p>{author}</p>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

export default BookList