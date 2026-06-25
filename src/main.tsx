import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import {Dashboard} from './pages/Dashboard.tsx'
import {VitalTasks} from './pages/VitalTasks.tsx'
import {MyTasks} from './pages/MyTasks.tsx'
import {TaskCategories} from './pages/TaskCategories.tsx'
import {Settings} from './pages/Settings.tsx'
import {Help} from './pages/Help.tsx'

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
        path: '/my-tasks',
        element: <MyTasks />
      },
      {
        path: '/vital-tasks',
        element: <VitalTasks />
      },
      {
        path: '/categories',
        element: <TaskCategories />
      },
      {
        path: '/settings',
        element: <Settings />
      },
      {
        path: '/help',
        element: <Help />
      },
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
