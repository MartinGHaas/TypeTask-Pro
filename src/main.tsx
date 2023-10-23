import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Login from './pages/login/Login'
import Projects from './pages/projects/Projects'
import Teams from './pages/teams/Teams'
import Tasks from './pages/tasks/Tasks'
import Notifications from './pages/notifications/Notifications'
import Config from './pages/config/Config'
import SignIn from './pages/signin/SignIn'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/teams',
        element: <Teams />
      },
      {
        path: '/tasks',
        element: <Tasks />
      },
      {
        path: '/notifications',
        element: <Notifications />
      },
      {
        path: '/config',
        element: <Config />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signin',
    element: <SignIn />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
