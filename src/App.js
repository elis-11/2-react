import "./App.scss";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";

/* eslint-disable jsx-a11y/no-redundant-roles */
function App(props) {

  function addTask(name){
    alert(name)
  }

  const taskList = props.tasks.map((task) =>
   <Todo 
   id={task.id} 
   name={task.name} 
   completed={task.completed} 
   key={task.id} 
   />);

  return (
    <div className="todoapp stack-large">
      <h1>TodoList</h1>
      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">
      <FilterButton />
      <FilterButton />
      <FilterButton />
      </div>
      
      <h2 id="list-heading">3 tasks remaining</h2>
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
