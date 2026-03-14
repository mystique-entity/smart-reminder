import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddTask({addTask}){

  const [task,setTask] = useState("")
  const navigate = useNavigate()

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

      <button className="btn" onClick={() => navigate("/map")} style={{marginLeft:"10px"}}>
        Select Location
      </button>

    </div>

  )

}

export default AddTask