export function Signin() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
    
      <div>
        <div>
          <input type="text" placeholder="enter your email"/>
        </div>

        <div>
          <input type="password" placeholder="password" />
        </div>

        <div>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}