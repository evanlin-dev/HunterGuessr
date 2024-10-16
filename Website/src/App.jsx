import './App.css'
import Pano from "./pages/Pano";
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
   <Routes>
      <Route path="/HunterGuessr" element={<Login />} />
      <Route path="/HunterGuessr/signup" element={<Pano />} />
   </Routes>
  )
}

export default App