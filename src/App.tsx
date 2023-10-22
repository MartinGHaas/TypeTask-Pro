import { Navigate, Outlet } from "react-router-dom";

import './styles/global.scss';

import Navbar from "./components/navbar/Navbar";

const useAuth = () => {
  // TODO: Change w/ api  
  const user = { isLogged: false };
  return user && user.isLogged;
}

const App = () => {
  const isLogged = useAuth();
  
  return isLogged ? 
    (
      <div className="container">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    ) : <Navigate to='/login' />
};


export default App;
