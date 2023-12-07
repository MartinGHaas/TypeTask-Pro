import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './pages/login/Login';
import Projects from './pages/projects/Projects';
import Teams from './pages/teams/Teams';
import Tasks from './pages/tasks/Tasks';
import Notifications from './pages/notifications/Notifications';
import Config from './pages/config/Config';
import { UserProvider } from './context/UserContext';
import SignUp from './pages/signup/SignUp';
import Docs from './pages/docs/Docs';
import Home from './pages/home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
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
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/docs',
    element: <Docs />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)
