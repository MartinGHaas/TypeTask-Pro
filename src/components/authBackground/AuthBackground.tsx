import { ReactNode } from 'react';
import './authBackground.scss';

type AuthProps = {
  children: ReactNode;
}

const AuthBackground = ({ children }: AuthProps) => {

  return (
    <div className='auth'>
      <div className="auth-container">
        {children}
      </div>
    </div>
  )
}

export default AuthBackground;