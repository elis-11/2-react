/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.scss";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      //if this task has the same ID as the edited task
      if (id === task.id) {
        //use object spread to make a new object
        //whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
    />
  ));

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid, name: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} tasks remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoList</h1>
      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>

      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}
export default App;
