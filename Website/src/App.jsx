import './App.css'
import Pano from "./pages/Pano";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Leaderboard from './pages/Leaderboard';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pano" element={<Pano />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  )
}

export default App
