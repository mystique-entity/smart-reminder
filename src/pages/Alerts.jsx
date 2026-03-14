function Alerts(){

  return(

    <div
      style={{
        minHeight:"100vh",
        background:"linear-gradient(135deg,#f3e7ff,#e9f0ff)",
        padding:"40px"
      }}
    >

      <div
        style={{
          maxWidth:"900px",
          margin:"auto"
        }}
      >

        <h1
          style={{
            color:"#7b3fe4",
            marginBottom:"10px"
          }}
        >
          Alerts & Notifications
        </h1>

        <p style={{marginBottom:"30px",color:"#666"}}>
          Stay updated on your tasks and team activities
        </p>


        {/* Unread Section */}

        <h3 style={{marginBottom:"15px"}}>Unread</h3>

        <div
          style={{
            background:"#ffe9c7",
            borderRadius:"15px",
            padding:"20px",
            marginBottom:"20px",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
          }}
        >

          <div>
            <h3 style={{margin:"0"}}>Task is due soon</h3>
            <p style={{margin:"5px 0"}}>Team meeting preparation</p>
          </div>

          <button
            style={{
              border:"none",
              background:"white",
              padding:"8px 16px",
              borderRadius:"8px",
              cursor:"pointer"
            }}
          >
            Mark as read
          </button>

        </div>


        <div
          style={{
            background:"#dceaff",
            borderRadius:"15px",
            padding:"20px",
            marginBottom:"20px",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
          }}
        >

          <div>
            <h3 style={{margin:"0"}}>You were assigned a new task</h3>
            <p style={{margin:"5px 0"}}>Project review</p>
          </div>

          <button
            style={{
              border:"none",
              background:"white",
              padding:"8px 16px",
              borderRadius:"8px",
              cursor:"pointer"
            }}
          >
            Mark as read
          </button>

        </div>


        {/* Read Section */}

        <h3 style={{marginTop:"40px"}}>Read</h3>

        <div
          style={{
            background:"#f5f5f5",
            borderRadius:"15px",
            padding:"20px",
            marginTop:"15px"
          }}
        >

          <h3 style={{margin:"0"}}>Task was updated by Alice</h3>
          <p style={{margin:"5px 0"}}>Team meeting preparation</p>

        </div>

      </div>

    </div>

  )

}

export default Alerts