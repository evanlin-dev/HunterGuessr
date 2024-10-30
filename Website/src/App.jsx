import React from 'react';
import './App.css';
import Pano from './pages/Pano';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Stats from './pages/Stats';
import Leaderboard from './pages/Leaderboard';
import Settings from './pages/Settings';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#60269e',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: '#121212',
        paper: '#1e1e1e',
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
  });

  const NavBarWrapper = () => {
    const location = useLocation();
    const hideNavPaths = ['/login', '/signup'];
    return !hideNavPaths.includes(location.pathname) ? <NavBar /> : null;
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBarWrapper />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pano" element={<Pano />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
