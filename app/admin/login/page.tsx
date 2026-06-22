"use client";

export default function LoginPage() {
  return (
    <main style={{background:"#000",color:"#fff",minHeight:"100vh",padding:"40px"}}>
      <h1 style={{color:"gold",textAlign:"center"}}>Admin Login</h1>

      <div
        style={{
          maxWidth:"400px",
          margin:"auto",
          display:"flex",
          flexDirection:"column",
          gap:"20px"
        }}
      >
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button
          style={{
            background:"gold",
            color:"black",
            padding:"15px",
            border:"none",
            borderRadius:"10px"
          }}
        >
          Login
        </button>
      </div>
    </main>
  );
}