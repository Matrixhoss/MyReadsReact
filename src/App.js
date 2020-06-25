import React from "react";
import * as BooksAPI from "./BooksAPI";
import MyBookPage from "./MyBooksPage";
import "./App.css";
import SearchPage from "./SearchPage";

class BooksApp extends React.Component {
  state = {
    mybooks: [],
    searchedBooks: [],

    showSearchPage: false,
  };
  // main page functions
  getAllData = () => {
    BooksAPI.getAll().then((v) => {
      this.setState({
        mybooks: v,
      });
    });
  };

  componentDidMount() {
    this.getAllData();
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((data) => {
      this.getAllData();
    });
  };

  // search page functions
  searchBooks = (value) => {
    if (value !== "") {
      BooksAPI.search(value, 20).then((books) => {
        if (Array.isArray(books)) {
          this.setState({
            searchedBooks: this.addShelfToSearchedBook(books),
          });
        }
      });
    }
  };

  addShelfToSearchedBook = (sbooks) => {
    return sbooks.map((book) => {
      const existbook = this.state.mybooks.find(
        (mybook) => mybook.id === book.id
      );
      if (existbook !== undefined) {
        return existbook;
      }
      return book;
    });
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage
            searchedBooks={this.state.searchedBooks}
            searchBooks={this.searchBooks}
            changeShelf={this.changeShelf}
          />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <MyBookPage
              books={this.state.mybooks}
              changeShelf={this.changeShelf}
            />
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
