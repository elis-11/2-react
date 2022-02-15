// import { useState } from "react";
import card from "../../assets/nobg.png";
import "./Todos.scss";

import { FaTrashAlt } from "react-icons/fa";

export const Content = ({ items, handleCheck, handleDelete }) => {
  // ! -- main -- 1:03

  return (
    <main>
      <div>
        <img src={card} className="card" alt="" />
      </div>
      <div className="container">
        {items.length ? ( //! empty list 1:33
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
          <p style={{ marginTop: "1vW", fontSize: "2vw" }}>
            Your list is empty.
          </p> //! empty list 1:33
        )}
      </div>
    </main>
  );
};
