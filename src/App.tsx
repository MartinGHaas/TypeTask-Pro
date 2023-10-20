import { createBrowserRouter, RouterProvider } from "react-router-dom";
// TODO: add Outlet

import './styles/global.scss';

const App = () => {

  const Layout = () => {
    return (
      <>
      
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
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
      // element: <Login />
    },
    {
      path: '/signin'
      // element: <Login />
    }
  ])

  return <RouterProvider router={router} />;
}

export default App
