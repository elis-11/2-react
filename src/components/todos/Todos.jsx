import "./Todos.scss";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";
import { useState } from "react";
import { AddItem } from "./AddItem";

export const Todos = () => {
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
    const listItems = items.map(
      (item) => (item.id === id ? { ...item, checked: !item.checked } : item) // 1:23 change status
);
    setItems(listItems);
    //! -- LOCALSTORAGE -- 1:26
    localStorage.setItem("todolist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {  //! -- 1:29
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todolist", JSON.stringify(listItems));
  };

  // TODO tralala
  return (
    <div className="Todos">
        <Header title="Grocery List" />
        <div className="content">
      <AddItem />
      <Content
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      </div>
      <Footer length={items.length} />
    </div>
  );
};
// https://www.youtube.com/watch?v=RVFAyFWO4go&list=LL&index=73&t=1033s
//! 2:10 17.02