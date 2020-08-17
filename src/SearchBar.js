import React from 'react'

class SearchBar extends React.Component {
  handleChange = (event) => {
    this.props.onHandleChange(event.target.value);
    this.props.handleBooks(event.target.value)
  }

  render() {
    return (
      <div className="search-books-bar">
        <div className="search-books-input-wrapper">
          <input 
            type="text" 
            placeholder="Search by title or author"
            value={this.props.input}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar;