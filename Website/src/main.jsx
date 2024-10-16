import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Pano from './pages/Pano.jsx'
import SignUp from './pages/SignUp.jsx'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import './index.css'


const BrowserRouter = createBrowserRouter([
  {
    path: 'HunterGuessr/',
    element: <Login />
  },
  {
    path: '/HunterGuessr/Pano',
    element: <Pano />
  },
  {
    path: '/HunterGuessr/signup',
    element: <SignUp /> 
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {BrowserRouter}></RouterProvider>
  </StrictMode>
)
