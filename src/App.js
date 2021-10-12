/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./reset.css";
import "./scss/App.scss";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript-2", body: "Description" },
    { id: 3, title: "Javascript-3", body: "Description" },
  ]);

  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder="Name of Post" />
        <MyInput type="text" placeholder="Description" />
        <MyButton>Create a Post</MyButton>
      </form>
      <PostList posts={posts} title='JS Posts'/>
    </div>
  );
}

export default App;
