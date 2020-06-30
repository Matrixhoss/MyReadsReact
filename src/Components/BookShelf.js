import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

function BooksShelf(props) {
  const { title, books, changeShelf  , emptyHandler} = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          { books.length>0 ? books.map((book) => (
            <li key={book.id}>
              <Book
                data={book}
                shelf={"shelf" in book ? book.shelf : "none"}
                changeShelf={changeShelf}
              />
            </li>
          )): 
          <li>{emptyHandler}</li>
          }
        </ol>
      </div>
    </div>
  );
}

BooksShelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string,
  changeShelf: PropTypes.func,
};

export default BooksShelf;
