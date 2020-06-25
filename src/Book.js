import React, { Component } from "react";

class Book extends Component {
  render() {
    const bookData = this.props.data;
    const shelf = this.props.shelf;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                "url(" + bookData.imageLinks.smallThumbnail + ")",
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              defaultValue={shelf}
              onChange={(event) =>
                this.props.changeShelf(bookData, event.target.value)
              }
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{bookData.title}</div>
        <div className="book-authors">{bookData.authors[0]}</div>
      </div>
    );
  }
}
export default Book;
