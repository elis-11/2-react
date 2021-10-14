import React, {useState} from 'react'
import Counter from "./components/Counter";
import PostList from './components/PostList';
import "./scss/App.scss";

const App = () => {
  const [posts, setPosts] = useState([
    {id:1, title: 'JavaScript', body: 'Description'},
    {id:2, title: 'Java', body: 'Description'},
  ])

  return (
    <div className="App">
    <PostList posts={posts} title={'JAVASCRIPT POSTS'} />
      <Counter />
    </div>
  );
};

export default App;
