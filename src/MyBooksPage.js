import React, { Component } from "react";
import BooksShelf from "./BookShelf";

class MyBooksPage extends Component {

  filterBooks = (shelf) =>(
    this.props.books.filter((book) => (
      book.shelf === shelf
    ))
  )
  
  render() {
    return (
      <div className="list-books-content">
        <div>
          <BooksShelf title="Read" shelf="read" books={this.filterBooks("read")}/>
          <BooksShelf title="Current Reading" shelf="currentlyReading" books={this.filterBooks("currentlyReading")}/>
          <BooksShelf title="Want to read" shelf="wantToRead" books={this.filterBooks("wantToRead")}/>
        </div>
      </div>
    );
  }
}

export default MyBooksPage;
