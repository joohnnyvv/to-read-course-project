import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

function BookList({ books, onDelete, onEdit }) {
  const value = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow onDelete={onDelete} key={book.id} book={book} onEdit={onEdit} />
    );
  });

  return (
    <div className={"book-list"}>
      {value}
      {renderedBooks}
    </div>
  );
}

export default BookList;
