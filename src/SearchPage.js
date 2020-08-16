import React from 'react'
import SearchBar from './SearchBar'
import BookList from './BookList'
import {search} from './BooksAPI'

class SearchPage extends React.Component {
  state = {
    input: '',
    books: []
  }

  onHandleChange = (input) => {
    this.setState({
      input,
    })
  }

  handleBooks = (query) => {
    query && search(query)
    .then(books=>{
      this.setState({
        books,
      })
    })
  }

  render() {
    return (
      <div className="search-books">
        <SearchBar input={this.state.input} onHandleChange={this.onHandleChange} handleBooks={this.handleBooks} />
        <BookList books={this.state.books} />
      </div>
      
    )
  }
}

export default SearchPage