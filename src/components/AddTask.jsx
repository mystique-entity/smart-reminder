import { useState } from "react"

function AddTask({addTask}){

  const [task,setTask]=useState("")

  function handleAdd(){

    if(task==="") return

    addTask(task)

    setTask("")
  }

  return(

    <div>

      <input
        type="text"
        placeholder="Enter new task"
        value={task}
        onChange={(e)=>setTask(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add Task
      </button>

    </div>

  )

}

export default AddTask