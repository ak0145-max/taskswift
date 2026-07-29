import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";
import logo from "./assets/logo.png";

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {

    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
      },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">

      <div className="logo">

    <img src={logo} alt="logo"/>

    <h1>TaskSwift</h1>

</div>

<p className="subtitle">

Manage your daily tasks easily.

</p>

<p className="counter">

Total Tasks : {tasks.length}

</p>

      <TaskForm addTask={addTask} />

      <TaskList tasks={tasks} deleteTask={deleteTask} />

    </div>
  );
}

export default App;