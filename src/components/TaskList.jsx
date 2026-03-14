function TaskList({ tasks, toggleTask }) {

  return (
    <div style={{marginTop:"20px"}}>

      <h3>Tasks</h3>

      {tasks.map((task, index) => (
        <div key={index} style={{marginBottom:"8px"}}>

          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(index)}
          />

          <span style={{marginLeft:"8px"}}>
            {task.text}
          </span>

        </div>
      ))}

    </div>
  );
}

export default TaskList;