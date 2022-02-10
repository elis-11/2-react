import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Navbar } from "../navbar/Navbar";
import { Home } from "../home/Home";
import { About } from "../about/About";
import { Projects } from "../projects/Projects";
import { Users } from "../users/Users";
import { Work } from "../work/Work";
import { Settings } from "../settings/Settings";
import { Hooks } from "../hooks/Hooks";
import { Form } from "../form/Form";
import { Todos } from "../todos/Todos";
import { NotFound } from "./NotFound";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
        <Route path="work/*" element={<Work />} />
        <Route path="form" element={<Form />} />
        <Route path="todos" element={<Todos />} />
        <Route path="settings" element={<Settings />} />
        <Route path="hooks/*" element={<Hooks />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
