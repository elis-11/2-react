/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import PostForm from "./components/PostForm";
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

const createPost=(newPost)=>{
  setPosts([...posts, newPost])
}
//get post from children components
const removePost=(post)=>{
  setPosts(posts.filter(p=>p.id !== post.id))
}

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length !== 0
      ? <PostList remove={removePost} posts={posts} title="JS Posts" />
      : <div>Posts not found!</div>
      }
    </div>
  );
}

export default App;
