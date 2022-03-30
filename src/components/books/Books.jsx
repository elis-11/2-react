// import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import "./Books.scss";

export const Books = () => {
  // const [books, setBooks] = useState([]);
  // const [book, setBook] = useState("");

  return (
    <div className="Books">
      <header>
        <h2>Books App</h2>
      </header>
      <div className="container">
        <form>
          <input name="book" type="text" placeholder="Create a new Book" />
        </form>
        <div className="book-list">
          {/* {books.map((book) => (
            <div key={book.id} className="book">
              {book.text}
              <div>{book.title}</div>
              <div>{book.author}</div> */}
              <div className="icons">
                <FaEdit className="icon" role="button" tabIndex="0" />
                <FaTrashAlt
                  className="icon"
                  role="button"
                  tabIndex="0"
                />
              {/* </div> */}
            </div>
          {/* ))} */}
        </div>
      </div>
      <footer>Copyright &copy; 2022</footer>
    </div>
  );
};
