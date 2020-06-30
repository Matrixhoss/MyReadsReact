import React, { Component } from "react";
import BooksShelf from "./BookShelf";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class MyBooksPage extends Component {

  filterBooks = (shelf) =>
    this.props.books.filter((book) => book.shelf === shelf);

  render() {
    const shelves = {
      currentlyReading: ['Currently Reading', 'currentlyReading'],
      wantToRead: ['Want to Read', 'wantToRead'],
      read: ['Read', 'read']
    }
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BooksShelf
                title={shelves.read[0]}
                books={this.filterBooks(shelves.read[1])}
                changeShelf={this.props.changeShelf}
                emptyHandler="The is No books in this shelf"
              />
              <BooksShelf
                title={shelves.currentlyReading[0]}
                books={this.filterBooks(shelves.currentlyReading[1])}
                changeShelf={this.props.changeShelf}
                emptyHandler="The is No books in this shelf"
              />
              <BooksShelf
                title={shelves.wantToRead[0]}
                books={this.filterBooks(shelves.wantToRead[1])}
                changeShelf={this.props.changeShelf}
                emptyHandler="The is No books in this shelf"
              />
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    );
  }
}

MyBooksPage.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func,
};

export default MyBooksPage;
