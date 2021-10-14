import React, {useState} from 'react'
import Counter from "./components/Counter";
import PostItem from './components/PostItem';
import "./scss/App.scss";

const App = () => {

  return (
    <div className="App">
     <PostItem />
      <Counter />
    </div>
  );
};

export default App;
