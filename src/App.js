/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
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

  const [post, setPost] = useState({ title: "", body: "" });
  //  const [body, setBody] = useState('')

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({ title: "", body: "" });
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Name of Post"
        />

        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Description"
        />
        <MyButton onClick={addNewPost}>Create a Post</MyButton>
      </form>
      <PostList posts={posts} title="JS Posts" />
    </div>
  );
}

export default App;
