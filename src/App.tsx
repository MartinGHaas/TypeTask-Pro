import { Navigate, Outlet } from "react-router-dom";

import './styles/global.scss';

import Navbar from "./components/navbar/Navbar";

import {useContext} from 'react';
import { UserContext } from "./context/UserContext";

const App = () => {

  const {user} = useContext(UserContext);

  return (
    <>
      {user.isLogged ?
          <div className="container">
            <Navbar />
            <main>
              <Outlet />
            </main>
          </div>
        : <Navigate to='/login' />
      }
    </>
  )
};

export default App;
