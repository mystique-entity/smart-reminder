import { useState } from "react";

function AddTask({ addTask }) {

  const [task, setTask] = useState("");

  function handleAdd() {
    if(task.trim() === "") return;

    addTask(task);
    setTask("");
  }

  return (
    <div style={{marginTop:"20px"}}>

      <h3>Add Task</h3>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAdd} style={{marginLeft:"10px"}}>
        Add
      </button>

    </div>
  );
}

export default AddTask;