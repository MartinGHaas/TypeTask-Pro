import { Navigate, Outlet } from "react-router-dom";

import './styles/global.scss';

import Navbar from "./components/navbar/Navbar";

import { useContext } from 'react';
import { UserContext } from "./context/UserContext";

const App = () => {

  const { user, isLoading } = useContext(UserContext);
  console.log(`App user: ${user}`);

  if (isLoading) {
    return null;
  }

  return (
    <>
      {user ?
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
