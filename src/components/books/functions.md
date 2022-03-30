- Step 1---
- CREATE THE JSX--

```
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import "./Books.scss";

export const Books = () => {

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
```
- Step 2---
- Add Books
```
import { useState } from "react";

const [books, setBooks] = useState([]);
const [book, setBook] = useState("");

--- 
const handleInputChange = (e) => {
  setBook(e.target.value);
};
const handleFormSubmit = (e) => {
  e.preventDefault();
  if (book !== "") {
    setBooks([...books, { 
      id: books.length + 1, 
      text: book.trim() 
    }]);
  }
  setBook("");
};
---
<form onSubmit={handleFormSubmit}>
value={book}
          onChange={handleInputChange}

</form>
---
return (
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
        // onClick={() => handleDeleteClick(book.id)}
        role="button"
        tabIndex="0"
        />
    </div>
  </div>
))}
</div>
        )
```
- step 3---
- add localstorage -> useEffect
```
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    if (savedBooks) {
      return JSON.parse(savedBooks);
    } else {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
```
- step 4---
- delete function
```
const handleDeleteClick=(id)=>{
  const removeItem =books.filter((book)=>{
    return book.id !== id
  })
  setBooks(removeItem)
}
---
                      <FaTrashAlt
                  className="icon"
                  onClick={() => handleDeleteClick(book.id)}
                  role="button"
                  tabIndex="0"
                />
```
- step 5---
- Edit books

```
  //1. Edit book
  const [isEditing, setIsEditing] = useState(false);
  const [currentBook, setCurrentBook] = useState({});
    // 2. Edit book
  const handleEditInputChange = (e) => {
    setCurrentBook({ ...currentBook, text: e.target.value });
    console.log(currentBook);
  };
  // 3. Handle when a user clicks "Edit" button
  const handleEditClick = (book) => {
    setIsEditing(true);
    setCurrentBook({ ...book });
  };
  // 4. Adding the updated text to the todos state
  const handleUpdateBook = (id, updatedBook) => {
    const updatedItem = books.map((book) => {
      return book.id === id ? updatedBook : book;
    });
    setIsEditing(false);
    setBooks(updatedItem);
  };
  // 5. Call the handleUpdateTodo function
  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateBook(currentBook.id, currentBook);
  };
        {isEditing ? (
          <form className="edit-form"
           onSubmit={handleEditFormSubmit}>
            {/* <h2>Edit book</h2> */}
            <label htmlFor="editBook"></label>
            <input
              name="editBook"
              type="text"
              placeholder="Edit book"
              value={currentBook.text}
              onChange={handleEditInputChange}
            />
            <button className="update" type="submit">Update</button>
            <button className="cancel" onClick={() => setIsEditing(false)}>Cancel</button>
          </form>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <input
              className="add"
              name="book"
              type="text"
              placeholder="Create a new Book"
              value={book}
              onChange={handleInputChange}
            />
          </form>
        )}

--
```
--- step 6---

```
```
--- step 7---

```
