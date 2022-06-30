import React, { useState } from "react";
import Form from "./component/Form"
import FilterButton from "./component/FilterButton";
import TodoList from './component/TodoList';
import { nanoid } from "nanoid";

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);

  const taskList = tasks.map(task => (
    <TodoList
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  )
  );

  function addTask(name) {
    // alert(name);

    const newTask = { id: "todo-" + nanoid(), name: name, completed: false }
    setTasks([...tasks, newTask]);
  }



return (
  <div className="todoapp stack-large">
    <h1>TodoMatic</h1>
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
