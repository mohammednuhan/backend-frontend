export function Dashboard(){
    return (
        <div style={{
            display :"flex",
            justifyContent:"center",
            alignItems :"center",
            height :"100vh",
            backgroundColor:"grey",
            fontFamily :"Arial, Helvetica, sans-serif"
            }}>
               
         <div> 
            <div>
              <h1>my todos</h1>   
            </div>           
         <div>
            <input type="text" placeholder="enter the todo" style={{padding : "10px",margin :"10px"}}/>
         </div>
         <div>
            <button style={{alignItems : "center",padding :"10px",margin :"center"}}>Add todo</button>
         </div>
        <div>
            <button style={{padding :"10px",margin:"10px",alignItems:"center"}}>Delete todo</button>
         </div>
        </div>  
        </div>
    )
}