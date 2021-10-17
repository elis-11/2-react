import React, { useState } from "react";
import "./Projects.scss";
// import PostItem from "./PostItem";
import PostList from "./PostList";

const Projects = () => {
  const [posts, setPosts] = useState([
    { id: "1", title: "JS", body: "Description" },
    { id: "2", title: "JS", body: "Description" },
  ]);
  const [posts2, setPosts2] = useState([
    { id: "1", title: "Python", body: "Description" },
    { id: "2", title: "Python", body: "Description" },
  ]);

  return (
    <div className="Projects">
      <PostList posts={posts} title="All Posts 1" />
      <PostList posts={posts2} title="All Posts 2" />
    </div>
  );
};
export default Projects;
