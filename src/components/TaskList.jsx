import { useState } from "react"

function AddTask({addTask}){

  const [task,setTask] = useState("")

  function handleAdd(){

    if(task==="") return

    addTask(task)
    setTask("")

  }

  return(

    <div className="task-box">

      <h2>My Tasks</h2>

      <input
        type="text"
        placeholder="Enter new task"
        value={task}
        onChange={(e)=>setTask(e.target.value)}
      />

      <button className="btn" onClick={handleAdd} style={{marginLeft:"10px"}}>
        Add Task
      </button>

    </div>

  )

}

export default AddTask