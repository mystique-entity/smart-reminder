import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){

  const navigate = useNavigate()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  function handleLogin(e){
    e.preventDefault()

    // temporary login
    navigate("/tasks")
  }

  return(

    <div
      className="login-page"
      style={{
        minHeight:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:"linear-gradient(135deg,#f3e7ff,#e9f0ff)"
      }}
    >

      <div
        className="login-card"
        style={{
          background:"white",
          padding:"40px",
          width:"400px",
          borderRadius:"20px",
          boxShadow:"0 10px 30px rgba(0,0,0,0.1)",
          textAlign:"center"
        }}
      >

        <div
          className="icon-circle"
          style={{
            width:"60px",
            height:"60px",
            borderRadius:"50%",
            background:"linear-gradient(135deg,#8f5cff,#ff5fa2)",
            color:"white",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            fontSize:"24px",
            margin:"0 auto 20px auto"
          }}
        >
          ✔
        </div>

        <h2 style={{marginBottom:"10px"}}>
          Welcome to TaskHub
        </h2>

        <p
          className="subtitle"
          style={{
            color:"#666",
            marginBottom:"30px"
          }}
        >
          Sign in to manage your tasks and collaborate with your team
        </p>

        <form
          onSubmit={handleLogin}
          style={{
            display:"flex",
            flexDirection:"column",
            gap:"15px"
          }}
        >

          <label style={{textAlign:"left"}}>Email</label>

          <input
            type="email"
            placeholder="user@example.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            style={{
              padding:"12px",
              borderRadius:"10px",
              border:"1px solid #ddd"
            }}
          />

          <label style={{textAlign:"left"}}>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            style={{
              padding:"12px",
              borderRadius:"10px",
              border:"1px solid #ddd"
            }}
          />

          <button
            className="login-btn"
            style={{
              marginTop:"10px",
              padding:"12px",
              borderRadius:"12px",
              border:"none",
              background:"linear-gradient(90deg,#8f5cff,#ff5fa2)",
              color:"white",
              fontSize:"16px",
              cursor:"pointer"
            }}
          >
            Sign In
          </button>

        </form>

        <p
          className="signup-text"
          style={{
            marginTop:"20px",
            color:"#555"
          }}
        >
          Don't have an account? <span style={{color:"#8f5cff",cursor:"pointer"}}>Sign up</span>
        </p>

      </div>

    </div>

  )

}

export default Login