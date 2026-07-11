import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import {Dashboard} from './pages/Dashboard.tsx'
import {Tasks} from './pages/Tasks.tsx'
import {TaskCategories} from './pages/TaskCategories.tsx'
import {Pomodoro} from './pages/Pomodoro.tsx'
import {Trash} from './pages/Trash.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to='/dashboard' replace/>
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/tasks',
        element: <Tasks />
      },
      {
        path: '/categories',
        element: <TaskCategories />
      },
      {
        path: '/pomodoro',
        element: <Pomodoro />
      },
      {
        path: '/trash',
        element: <Trash />
      },
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
