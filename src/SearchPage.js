import React from 'react'
import SearchBar from './SearchBar'
import BookList from './BookList'
import {search, update} from './BooksAPI'

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
    // query && search(query)
    // .then(books=>{
    //   this.setState({
    //     books,
    //   })
    // })
    if (query) {
      search(query)
      .then(books=>{
        this.setState({
          books,
        });
      })
    } else {
      this.setState({
        books:[]
      });
    }
  }

  render() {
    const {booksInShelf, updateBook} = this.props
    return (
      <div className="search-books">
        <SearchBar 
          input={this.state.input} 
          onHandleChange={this.onHandleChange} 
          handleBooks={this.handleBooks} 
        />
        <div className="search-books-results">
          <BookList 
            books={this.state.books} 
            updateBook={updateBook} 
            booksInShelf={booksInShelf} 
          />
        </div>
      </div>
      
    )
  }
}

export default SearchPage