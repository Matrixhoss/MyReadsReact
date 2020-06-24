import React, { Component } from "react";
import BooksShelf from "./BookShelf";

class MyBooksPage extends Component {
  render() {
    return (
      <div className="list-books-content">
        <div>
          <BooksShelf title="Read" />
          <BooksShelf title="Current Reading" />
          <BooksShelf title="Want to read" />
        </div>
      </div>
    );
  }
}

export default MyBooksPage;
