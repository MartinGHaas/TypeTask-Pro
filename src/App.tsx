import { Navigate, Outlet } from "react-router-dom";

import './styles/root.scss';
import './styles/global.scss';

import Navbar from "./components/navbar/Navbar";
import Info from "./components/info/Info";

import Cookies from 'js-cookie';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state/store";
import { useEffect, useState } from "react";
import { setUser } from "./state/user/userSlice";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const userJWT = Cookies.get('userJWT');
    if (userJWT) {
      const decodedUser = JSON.parse(atob(userJWT.split('.')[1]));
      dispatch(setUser(decodedUser))
    }
    setLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <>
      {user && user.id !== '' ?
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
