import { Navigate, Outlet } from "react-router-dom";

import './styles/root.scss';
import './styles/global.scss';

import Navbar from "./components/navbar/Navbar";
import Info from "./components/info/Info";

import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import RequireAuthToken from "./libs/authValidation/RequireAuthToken";
import useUserValidation from "./libs/userValidation/useUserValidation";

const App = () => {
  const user = useSelector((state: RootState) => state.user);
  const useTokenValidation = useUserValidation();

  return (
    <RequireAuthToken>
      {useTokenValidation.validateTokenUser(user) ?
        <div className="page-container">
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Info />
        </div>
        : <Navigate to='/auth/login' />
      }
    </RequireAuthToken>
  )
};

export default App;
