import React, { useState } from "react";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
// import Counter from "./components/Counter";
import "./reset.css";
import "./scss/App.scss";

function App(props) {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript-2", body: "Description" },
    { id: 3, title: "Javascript-3", body: "Description" },
  ]);

  return (
    <div className="App">
      <PostList posts={posts}  title='JS Posts'/>
    </div>
  );
}

export default App;
