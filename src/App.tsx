import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "../src/components/signup";
import { Signin } from "../src/components/signin";
import { Dashboard } from "../src/components/dashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                 <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
   </BrowserRouter>
  )
}
export default App