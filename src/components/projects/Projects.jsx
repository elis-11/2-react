/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Projects.scss";
import PostList from "./PostList";
import PostForm from "./PostForm";

function Projects() {
  const [posts, setPosts] = useState([
    { id: "1", title: "JS", body: "Description" },
    { id: "2", title: "JS", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="Projects">
      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title="All Posts" />
    </div>
  );
}
export default Projects;
