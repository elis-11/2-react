/* eslint-disable no-unused-vars */
import React, { useMemo, useRef, useState } from "react";
import PostFilter from "./components/PostFilter";
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

const [filter, setFilter]=useState({sort:'', query:''});

  function getSortedPosts() {}

  const sortedPosts = useMemo(() => {
    console.log('workd function sorted posts');
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts= useMemo(() => {
return sortedPosts.filter(post=>post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  //get post from children components
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
     <PostFilter
     filter={filter}
     setFilter={setFilter}
     />
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="JS Posts" />
    </div>
  );
}

export default App;
