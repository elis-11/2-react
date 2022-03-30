import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import "./Books.scss";

export const Books = () => {

  // Add books
  const [books, setBooks] = useState(() => {
    // localStorage- savedItems- Books
    const savedBooks = localStorage.getItem("books");
    if (savedBooks) {
      return JSON.parse(savedBooks);
    } else {
      return [];
    }
  });
  // Add books
  const [book, setBook] = useState("");

    // localStorage- savedItems- Books
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  // Add books
  const handleInputChange = (e) => {
    setBook(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (book !== "") {
      setBooks([
        ...books,
        {
          id: books.length + 1,
          text: book.trim(),
        },
      ]);
    }
    setBook("");
  };

const handleDeleteClick=(id)=>{
  const removeItem =books.filter((book)=>{
    return book.id !== id
  })
  setBooks(removeItem)
}

  return (
    <div className="Books">
      <header>
        <h2>Books App</h2>
      </header>
      <div className="container">
        <form onSubmit={handleFormSubmit}>
          <input
            name="book"
            type="text"
            placeholder="Create a new Book"
            value={book}
            onChange={handleInputChange}
          />
        </form>
        <div className="book-list">
          {books.map((book) => (
            <div key={book.id} className="book">
              {book.text}
              <div>{book.title}</div>
              <div>{book.author}</div>
              <div className="icons">
                <FaEdit className="icon" role="button" tabIndex="0" />
                <FaTrashAlt
                  className="icon"
                  onClick={() => handleDeleteClick(book.id)}
                  role="button"
                  tabIndex="0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer>Copyright &copy; 2022</footer>
    </div>
  );
};
