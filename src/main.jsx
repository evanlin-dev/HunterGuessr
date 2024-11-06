import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Pano from './pages/Pano.jsx'
import SignUp from './pages/SignUp.jsx'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
  </StrictMode>
)
