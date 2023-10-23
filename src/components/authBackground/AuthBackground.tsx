import { FC, ReactNode } from 'react';
import './authBackground.scss';

type AuthProps = {
  children: ReactNode;
}

const AuthBackground: FC<AuthProps> = ({ children }) => {
  return(
    <div className='auth'>
      <div className="auth-container">
        {children}
      </div>
    </div>
  )
}

export default AuthBackground;