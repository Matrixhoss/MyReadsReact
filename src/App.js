import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import MyBookPage from "./Components/MyBooksPage";
import "./App.css";
import SearchPage from "./Components/SearchPage";
import { Route } from "react-router-dom";

class BooksApp extends Component {
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
        <Route
          exact
          path="/"
          render={() => (
            <MyBookPage
              books={this.state.mybooks}
              changeShelf={this.changeShelf}
            />
          )}
        />

        <Route
          path="/search"
          render={() => (
            <SearchPage
              searchedBooks={this.state.searchedBooks}
              searchBooks={this.searchBooks}
              changeShelf={this.changeShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
