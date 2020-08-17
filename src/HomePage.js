import React from 'react'
import BookShelf from './BookShelf'

class HomePage extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf 
              shelfName={"Currently Reading"} 
              shelf={this.props.currReading}
            />

            <BookShelf 
              shelfName={"Want to Read"} 
              shelf={this.props.wantToRead}
            />
            
            <BookShelf 
              shelfName={"Read"} 
              shelf={this.props.read}
            />
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>
    )
  }
}

export default HomePage