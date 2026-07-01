export function Signup() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor : "black"

      }}
    >
      <div>
        <div>
          <input type="text" placeholder="username/email" style={{margin : "10px",padding : "10px",borderRadius:"10px"}}  />
        </div>

        <div>
          <input type="password" placeholder="password"  style={{margin : "10px",padding : "10px",borderRadius:"10px"}} />
        </div>

        <div>
          <button style={{alignItems : "center",padding :"10px",margin :"10px"}}>Login</button>
        </div>
      </div>
    </div>
  );
}