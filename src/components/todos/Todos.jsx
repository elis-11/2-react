import "./Todos.scss";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";
import { useState } from "react";
import { AddItem } from "./AddItem";

export const Todos = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todolist')));
  const [newItem, setNewItem] = useState("");

const setAndSaveItems = (newItems)=>{
  setItems(newItems);
localStorage.setItem("todolist", JSON.stringify(newItems));

}

const addItem=(item) => {
  const id= items.length ? items[items.length -1].id +1 : 1
  const myNewItem ={id, checked:false, item}
const listItems= [...items, myNewItem]
setAndSaveItems(listItems);
localStorage.setItem("todolist", JSON.stringify(listItems));
}

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
setAndSaveItems(listItems);

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  // TODO tralala
  return (
    <div className="Todos">
      <Header title="Grocery List" />
      <div className="content">
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
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
