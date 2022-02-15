// import { useState } from "react";
import card from "../../assets/nobg.png";
import "./Todos.scss";
import { ItemList } from "./ItemList";

export const Content = ({ items, handleCheck, handleDelete }) => {
  // ! -- main -- 1:03
  return (
    <main>
      <div>
        <img src={card} className="card" alt="" />
      </div>
      <div className="container">
        {items.length ? ( //! empty list 1:33
          <ItemList
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ) : (
          <p style={{ marginTop: "1vW", fontSize: "2vw" }}>
            Your list is empty.
          </p> //! empty list 1:33
        )}
      </div>
    </main>
  );
};
