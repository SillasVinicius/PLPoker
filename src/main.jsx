import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/styles/global.css'
import Home from './routes/home';
import Login from './routes/login';

const router = createBrowserRouter([
  {
    path: "/PLPoker",
    element: <Home/>,
  },
  {
    path: "/PLPoker/Login",
    element: <Login/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
