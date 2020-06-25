import React, { Component } from "react";
import BooksShelf from "./BookShelf";

class MyBooksPage extends Component {
  filterBooks = (shelf) =>
    this.props.books.filter((book) => book.shelf === shelf);

  render() {
    return (
      <div className="list-books-content">
        <div>
          <BooksShelf
            title="Read"
            books={this.filterBooks("read")}
            changeShelf={this.props.changeShelf}
          />
          <BooksShelf
            title="Current Reading"
            books={this.filterBooks("currentlyReading")}
            changeShelf={this.props.changeShelf}
          />
          <BooksShelf
            title="Want to read"
            books={this.filterBooks("wantToRead")}
            changeShelf={this.props.changeShelf}
          />
        </div>
      </div>
    );
  }
}

export default MyBooksPage;
