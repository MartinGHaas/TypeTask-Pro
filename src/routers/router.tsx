import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Docs from '../pages/docs/Docs';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Notifications from '../pages/notifications/Notifications';
import Projects from '../pages/projects/Projects';
import SignUp from '../pages/signup/SignUp';
import Tasks from '../pages/tasks/Tasks';
import Teams from '../pages/teams/Teams';
import Config from '../pages/config/Config';
import Auth from '@/Auth';

export const router = createBrowserRouter([
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
    path: '/auth',
    element: <Auth />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      }
    ]
  },
  {
    path: '/docs',
    element: <Docs />
  }
]);