-Step 1---
---CREATE THE JSX--
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
// ---Step 2---
Add Books
```
import { useState } from "react";

const [books, setBooks] = useState([]);
const [book, setBook] = useState("");

//  Add functionality
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
//-------------
<form onSubmit={handleFormSubmit}>
value={book}
          onChange={handleInputChange}

</form>
//------------
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
--- step 3---
--- add localstorage -> useEffect
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
--- step 4---
```
```
--- step 5---

```
```
--- step 6---

```
```
--- step 7---

```
