import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Login from "./pages/auth/login/login"
import Register from "./pages/auth/register/register"

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />} />
      </Routes>
      
    </BrowserRouter>
  )
}