import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "../src/components/signup";
import { Signin } from "../src/components/signin";
import { Todo } from "../src/components/todo"

function App() {
  return (
    <BrowserRouter>
      <Routes>
                 <Route path="/" element={<Signup />} />        
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                 <Route path="/todo" element={< Todo />} />
      </Routes>
   </BrowserRouter>
  )
}
export default App