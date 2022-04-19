import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Navbar } from "../layout/Navbar";
import { Profile } from "../profile/Profile";
import { Books } from "../books/Books";
import { Projects } from "../projects/Projects";
import { Users } from "../users/Users";
import { Work } from "../work/Work";
import { Course } from "../course/Course";
import { Hooks } from "../hooks/Hooks";
import { Form } from "../form/Form";
import  Todos  from "../todos/Todos";
import { NotFound } from "./NotFound";
import { New } from "../new/New";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="books" element={<Books />} />
        <Route path="users" element={<Users />} />
        <Route path="work/*" element={<Work />} />
        <Route path="form" element={<Form />} />
        <Route path="todos" element={<Todos />} />
        <Route path="course/*" element={<Course />} />
        <Route path="hooks/*" element={<Hooks />} />
        <Route path="new/*" element={<New />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
