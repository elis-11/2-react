import React, { useState } from "react";
import "./Projects.scss";
// import PostItem from "./PostItem";
import PostList from "./PostList";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const Projects = () => {
  // eslint-disable-next-line no-unused-vars
  const [posts, setPosts] = useState([
    { id: "1", title: "JS", body: "Description" },
    { id: "2", title: "JS", body: "Description" },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost={
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost]);
  };

  return (
    <div className="Projects">
      <form>
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <MyInput
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="Description"
        />
        <MyButton onClick={addNewPost}>create a post</MyButton>
      </form>
      <PostList posts={posts} title="All Posts 1" />
    </div>
  );
};
export default Projects;
