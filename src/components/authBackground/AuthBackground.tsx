import { ReactNode, useState } from 'react';
import Cookies from 'js-cookie';
import './authBackground.scss';

type AuthProps = {
  children: ReactNode;
}

const AuthBackground = ({ children }: AuthProps) => {

  /**
   * DEVELOPMENT ONLY
   */
  const [devLogin, setDevLogin] = useState<number>(0);

  const randomJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiMTIzNDU2Nzg5MCIsImVtYWlsIjoiSm9obiBEb2UiLCJpZCI6IjE1MTYyMzkwMjIifQ.TuTCw5_Gu-rVWwq2IXI4WcxoClUrnQDEX9pMAaPLrcA';
  const handleClick = () => {
    console.log(devLogin);

    if (devLogin === 2) {
      Cookies.set('userJWT', randomJWT);
    }
    setDevLogin(prev => prev + 1);
  }

  return (
    <div className='auth' onClick={handleClick}>
      <div className="auth-container">
        {children}
      </div>
    </div>
  )
}

export default AuthBackground;