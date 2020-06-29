import React, { Component } from "react";
import BookShelf from "./BookShelf";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class SearchPage extends Component {
  state = {
    inputValue: "",
  };

  onInputChange = (value, search) => {
    this.setState({
      inputValue: value.trim(),
    });
    search(value.trim());
  };
  render() {
    const { searchedBooks, searchBooks, changeShelf } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.inputValue}
              onChange={(event) =>
                this.onInputChange(event.target.value, searchBooks)
              }
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookShelf
            title="Results"
            books={searchedBooks}
            changeShelf={changeShelf}
          />
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  searchedBooks: PropTypes.array,
  changeShelf: PropTypes.func,
};

export default SearchPage;
