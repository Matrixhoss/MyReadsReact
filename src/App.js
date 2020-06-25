import React from "react";
import * as BooksAPI from "./BooksAPI";
import MyBookPage from "./MyBooksPage";
import "./App.css";
import SearchPage from "./SearchPage";

class BooksApp extends React.Component {
  state = {
    allbooks: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  };

  componentDidMount() {
    this.getAllData();
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((data) => {
      this.getAllData();
    });
  };

  getAllData = () => {
    BooksAPI.getAll().then((v) => {
      this.setState({
        allbooks: v,
      });
    });
  };
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <MyBookPage
              books={this.state.allbooks}
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
