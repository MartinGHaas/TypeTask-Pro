import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Login from './pages/Login/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/projects'
        // element: <Projects />
      },
      {
        path: '/team'
        // element: <Team />
      },
      {
        path: '/tasks'
        // element: <Tasks />
      },
      {
        path: '/notifications'
        // element: <Notifications />
      },
      {
        path: '/config'
        // element: <Config />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signin'
    // element: <SignIn />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
