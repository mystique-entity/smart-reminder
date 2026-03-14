import { useState } from "react";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {

  const [tasks, setTasks] = useState([]);

  function addTask(text) {

    const newTask = {
      text: text,
      completed: false
    };

    setTasks([...tasks, newTask]);
  }

  function toggleTask(index) {

    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;

    setTasks(updatedTasks);
  }

  return (
    <div style={{padding:"20px"}}>

      <Navbar />

      <AddTask addTask={addTask} />

      <TaskList tasks={tasks} toggleTask={toggleTask} />

    </div>
  );
}

export default App;
