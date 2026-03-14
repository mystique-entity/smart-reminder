import { useLocation } from "react-router-dom"
import { useState } from "react"

function Alerts(){

  const location = useLocation()

  const [alerts,setAlerts] = useState(location.state?.alerts || [])

  function markRead(index){

    const updated=[...alerts]

    updated[index].read=true

    setAlerts(updated)
  }

  function markAll(){

    const updated=alerts.map(a=>({...a,read:true}))

    setAlerts(updated)
  }

  const unread=alerts.filter(a=>!a.read)
  const read=alerts.filter(a=>a.read)

  return(

    <div style={{padding:"40px"}}>

      <h1>Alerts & Notifications</h1>

      <button onClick={markAll} style={{marginBottom:"20px"}}>
        Mark All as Read
      </button>

      <h2>Unread ({unread.length})</h2>

      {unread.map((a,i)=>(
        <div key={i} style={{
          background:"#ffe5c7",
          padding:"20px",
          borderRadius:"10px",
          marginBottom:"15px"
        }}>

          <h3>{a.title}</h3>
          <p>Task: {a.task}</p>
          <p>{a.time}</p>

          <button onClick={()=>markRead(i)}>
            Mark as read
          </button>

        </div>
      ))}

      <h2>Read</h2>

      {read.map((a,i)=>(
        <div key={i} style={{
          background:"#eee",
          padding:"20px",
          borderRadius:"10px",
          marginBottom:"15px"
        }}>

          <h3>{a.title}</h3>
          <p>Task: {a.task}</p>

        </div>
      ))}

    </div>

  )

}

export default Alerts