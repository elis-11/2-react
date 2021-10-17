import React, { useState } from "react";
import "./Projects.scss";
// import PostItem from "./PostItem";
import PostList from "./PostList";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const Projects = () => {
  const [posts, setPosts] = useState([
    { id: "1", title: "JS", body: "Description" },
    { id: "2", title: "JS", body: "Description" },
  ]);

  return (
    <div className="Projects">
      <form>
        <MyInput type="text" placeholder="Name" />
        <MyInput type="text" placeholder="Description" />
        <MyButton>create a post</MyButton>
      </form>
      <PostList posts={posts} title="All Posts 1" />
    </div>
  );
};
export default Projects;
