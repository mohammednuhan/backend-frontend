import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const navigate = useNavigate();

  async function addTodo() {
    const response = await axios.post("http://localhost:3000/todo",
      {
        todo: todo,
      },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      navigate("/todos");
    } else {
      alert(response.data.message || "Todo Added Successfully");
    }
  }

  async function getTodos() {
    const getResponse = await axios.get(
      "http://localhost:3000/todos",
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    setTodos(getResponse.data.message);
    setTodo("");
  }

  getTodos();

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "grey",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div>
        <div>
          <h1>My Todos</h1>
        </div>
        <div>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            placeholder="Enter the todo"
            style={{ padding: "10px", margin: "10px" }}
          />
        </div>

        <div>
          <button
            onClick={addTodo}
            style={{ padding: "10px", margin: "10px" }}
          >Add Todo
          </button>
<div>
   {todos.map((item,index)=>(
    <div key={index}>
        {item}
    </div>
))}
</div>
        </div>
      </div>
    </div>
  );
}