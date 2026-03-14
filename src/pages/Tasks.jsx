import Navbar from "../components/Navbar"
import AddTask from "../components/AddTask"
import TaskList from "../components/TaskList"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Tasks(){

  const [tasks,setTasks] = useState([])
  const navigate = useNavigate()

  function addTask(text){

    const newTask={
      text:text,
      completed:false
    }

    setTasks([...tasks,newTask])
  }

  function toggleTask(index){

    const updated=[...tasks]

    updated[index].completed=!updated[index].completed

    setTasks(updated)
  }

  return(

    <div
      style={{
        minHeight:"100vh",
        background:"linear-gradient(135deg,#f3e7ff,#e9f0ff)"
      }}
    >

      <Navbar/>

      <div
        style={{
          maxWidth:"900px",
          margin:"auto",
          padding:"40px"
        }}
      >

        {/* HEADER */}

        <div
          style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
          }}
        >

          <div>
            <h1 style={{color:"#7b3fe4"}}>My Tasks</h1>
            <p style={{color:"#666"}}>Welcome back</p>
          </div>

          <div style={{display:"flex",gap:"10px"}}>

            <button
              style={{
                padding:"10px 18px",
                border:"none",
                borderRadius:"12px",
                background:"linear-gradient(90deg,#8f5cff,#ff5fa2)",
                color:"white",
                cursor:"pointer"
              }}
            >
              + Add Task
            </button>

            <button
              onClick={() => navigate("/map")}
              style={{
                padding:"10px 18px",
                border:"none",
                borderRadius:"12px",
                background:"linear-gradient(90deg,#8f5cff,#ff5fa2)",
                color:"white",
                cursor:"pointer"
              }}
            >
              + Select Location
            </button>

          </div>

        </div>

        {/* FILTER TABS */}

        <div
          style={{
            marginTop:"25px",
            background:"#eee",
            padding:"6px",
            borderRadius:"25px",
            display:"flex",
            gap:"10px",
            width:"fit-content"
          }}
        >

          <div
            style={{
              padding:"6px 14px",
              borderRadius:"20px",
              background:"white",
              fontWeight:"bold"
            }}
          >
            All ({tasks.length})
          </div>

          <div
            style={{
              padding:"6px 14px",
              borderRadius:"20px"
            }}
          >
            Individual (0)
          </div>

          <div
            style={{
              padding:"6px 14px",
              borderRadius:"20px"
            }}
          >
            Collaborated (0)
          </div>

        </div>


        {/* ADD TASK INPUT */}

        <div style={{marginTop:"25px"}}>
          <AddTask addTask={addTask}/>
        </div>


        {/* TASK LIST CARD */}

        <div
          style={{
            marginTop:"25px",
            background:"white",
            padding:"30px",
            borderRadius:"20px",
            boxShadow:"0 6px 20px rgba(0,0,0,0.08)"
          }}
        >

          {tasks.length === 0 ? (

            <div style={{textAlign:"center",color:"#666"}}>
              <h3>No tasks yet</h3>
              <p>Create your first task to get started!</p>
            </div>

          ) : (

            <TaskList tasks={tasks} toggleTask={toggleTask}/>

          )}

        </div>

      </div>

    </div>

  )

}

export default Tasks