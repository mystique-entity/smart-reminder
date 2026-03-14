function TaskList({tasks,toggleTask}){

  return(

    <ul style={{marginTop:"20px",paddingLeft:"20px"}}>

      {tasks.map((task,index)=>(
        
        <li key={index} style={{marginBottom:"10px"}}>

          <label>

            <input
              type="checkbox"
              checked={task.completed}
              onChange={()=>toggleTask(index)}
              style={{marginRight:"10px"}}
            />

            <span style={{
              textDecoration:task.completed?"line-through":"none"
            }}>
              {task.text}
            </span>

          </label>

        </li>

      ))}

    </ul>

  )

}

export default TaskList