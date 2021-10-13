/* eslint-disable no-unused-vars */
import React, { useMemo, useRef, useState } from "react";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
// import "./reset.css";
import "./scss/App.scss";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Script-2", body: "De" },
    { id: 3, title: "JS-3", body: "Script" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  function getSortedPosts() {}

  const sortedPosts = useMemo(() => {
    console.log('workd function sorted posts');
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  //get post from children components
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="sort by"
          options={[
            { value: "title", name: "name" },
            { value: "body", name: "description" },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList remove={removePost} posts={sortedPosts} title="JS Posts" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Posts not found!</h1>
      )}
    </div>
  );
}

export default App;
