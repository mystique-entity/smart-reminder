import Navbar from "../components/Navbar"
import AddTask from "../components/AddTask"
import TaskList from "../components/TaskList"

import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { db } from "../firebase"
import { collection,addDoc,getDocs,updateDoc,doc } from "firebase/firestore"

function Tasks(){

  const [tasks,setTasks] = useState([])
  const navigate = useNavigate()

  const tasksRef = collection(db,"tasks")

  useEffect(()=>{
    loadTasks()
  },[])

  async function loadTasks(){

    const data = await getDocs(tasksRef)

    const list = data.docs.map(d=>({
      id:d.id,
      ...d.data()
    }))

    setTasks(list)
  }

  async function addTask(text){

    const newTask={
      text:text,
      completed:false
    }

    const docRef = await addDoc(tasksRef,newTask)

    setTasks([...tasks,{id:docRef.id,...newTask}])
  }

  async function toggleTask(index){

    const updated=[...tasks]

    updated[index].completed=!updated[index].completed

    setTasks(updated)

    const task=updated[index]

    const taskDoc=doc(db,"tasks",task.id)

    await updateDoc(taskDoc,{
      completed:task.completed
    })
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

          <button
            onClick={()=>navigate("/map")}
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

          <div style={{padding:"6px 14px"}}>
            Individual
          </div>

          <div style={{padding:"6px 14px"}}>
            Group Tasks
          </div>

        </div>

        <div style={{marginTop:"25px"}}>
          <AddTask addTask={addTask}/>
        </div>

        <div
          style={{
            marginTop:"25px",
            background:"white",
            padding:"30px",
            borderRadius:"20px",
            boxShadow:"0 6px 20px rgba(0,0,0,0.08)"
          }}
        >

          {tasks.length===0 ?(

            <div style={{textAlign:"center",color:"#666"}}>
              <h3>No tasks yet</h3>
              <p>Create your first task to get started!</p>
            </div>

          ):(
            <TaskList tasks={tasks} toggleTask={toggleTask}/>
          )}

        </div>

      </div>

    </div>

  )

}

export default Tasks