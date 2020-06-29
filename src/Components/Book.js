import React from "react";

function Book(props) {
  const bookData = props.data;
  const shelf = props.shelf;
  const changeShelf = props.changeShelf;

  const title = "title" in bookData ? bookData.title : "Unknowen";
  const auther =
    "authors" in bookData ? bookData.authors.join(" , ") : "Unknowen";
  const thumbnail =
    "imageLinks" in bookData ? bookData.imageLinks.smallThumbnail : "";
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: "url(" + thumbnail + ")",
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            defaultValue={shelf}
            onChange={(event) => changeShelf(bookData, event.target.value)}
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
      <div className="book-title">{title}</div>
      <div className="book-authors">{auther}</div>
    </div>
  );
}
export default Book;
