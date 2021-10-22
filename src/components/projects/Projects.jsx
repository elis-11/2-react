import React, { useState } from "react";
import "./Projects.scss";
// import PostItem from "./PostItem";
import PostList from "./PostList";
// import MyButton from "../UI/button/MyButton";
// import MyInput from "../UI/input/MyInput";
import PostForm from "./PostForm";

function Projects() {
  const [posts, setPosts] = useState([
    { id: "1", title: "JS", body: "Description" },
    { id: "2", title: "JS", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  return (
    <div className="Projects">
      <PostForm create={createPost}/>
      <PostList posts={posts} title="All Posts" />
    </div>
  );
};
export default Projects;
