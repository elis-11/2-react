import { useEffect, useState } from "react";
import { Search } from "./Search";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";
import { AddItem } from "./AddItem";
import "./Todos.scss";

export const Todos = () => {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not reseive expected data");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally{
        setIsLoading(false)
      }
    };
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);

  }, []);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
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
      <Header title="Todo List" />
      <div className="content">
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <Search search={search} setSearch={setSearch} />
        <main>
          {isLoading && <p>Loading...</p>}
          {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>
          }
          {!fetchError && !isLoading && <Content
              items={items.filter((item) =>
               ((item.item).toLowerCase()).includes(search.toLowerCase()))}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />}
        </main>
      </div>
      <Footer length={items.length} />
    </div>
  );
};
