import React from 'react'

class SearchBar extends React.Component {
  state = {
    input: '',
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <form>
        <input 
          type="text" 
          placeholder="Search by title or author"
          value={this.state.input}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default SearchBar