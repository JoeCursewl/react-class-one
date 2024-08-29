import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/home" element={<Home />}/>
      </Routes>
      
    </BrowserRouter>
  )
}