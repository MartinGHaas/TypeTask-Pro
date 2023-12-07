import { Navigate, Outlet } from "react-router-dom";

import './styles/root.scss';
import './styles/global.scss';

import Navbar from "./components/navbar/Navbar";

import { useContext } from 'react';
import { UserContext } from "./context/UserContext";
import Info from "./components/info/Info";

const App = () => {

  const { user, isLoading } = useContext(UserContext);

  if (isLoading) {
    return null;
  }

  return (
    <>
      {user ?
        <div className="page-container">
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Info />
        </div>
        : <Navigate to='/login' />
      }
    </>
  )
};

export default App;
