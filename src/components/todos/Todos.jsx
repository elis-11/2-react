import { useState } from "react";
import card from "../../assets/nobg.png";
import "./Todos.scss";
import { FaTrashAlt } from "react-icons/fa";

export const Todos = () => {
  // ! main
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Item 1",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    // -- LOCALSTORAGE --
    localStorage.setItem("todolist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todolist", JSON.stringify(listItems));
  };
  // ! footer
  const today = new Date();

  return (
    <div className="Todos">
      <header>
        <h2>Groceries List</h2>
      </header>
      <main>
        <div className="card">
        <img src={card} className="card" alt="" />
        </div>
        <div className="container">
        {items.length ? ( //empty list 1:33
          <ul>
            {items.map((item) => (
              <li className="item" key={item.id}>
                <input
                  type="checkbox"
                  onChange={() => handleCheck(item.id)}
                  checked={item.checked}
                />
                <label
                  style={
                    item.checked ? { textDecoration: "line-through" } : null
                  }
                  onDoubleClick={() => handleCheck(item.id)} // <-- localStorage
                  >
                  {item.item}
                </label>
                {/* <button>Delete</button> */}
                <FaTrashAlt
                  onClick={() => handleDelete(item.id)}
                  role="button"
                  tabIndex="0"
                  />
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ marginTop: "1vw", fontSize: "2vw" }}>
            Your list is empty.
          </p> //empty list 1:33
        )}
        </div>
      </main>
      <footer>
        <p>Copyright &copy; {today.getFullYear()}</p>
      </footer>
    </div>
  );
};

// export default Todos;
