import { useState } from "react"

function AddTask({ addTask }) {

  const [task,setTask] = useState("")

  function handleAdd(){

    if(task.trim()==="") return

    addTask(task)

    setTask("")
  }

  return(

    <div style={{marginTop:"20px"}}>

      <input
        type="text"
        placeholder="Enter new task"
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        style={{
          padding:"10px",
          borderRadius:"8px",
          border:"1px solid #ccc",
          marginRight:"10px"
        }}
      />

      <button
        onClick={handleAdd}
        style={{
          padding:"10px 16px",
          border:"none",
          borderRadius:"10px",
          background:"linear-gradient(90deg,#8f5cff,#ff5fa2)",
          color:"white",
          cursor:"pointer"
        }}
      >
        Add Task
      </button>

    </div>

  )

}

export default AddTask