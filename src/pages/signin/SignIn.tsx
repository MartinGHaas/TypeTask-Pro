import { useState } from 'react';
import AuthBackground from '../../components/authBackground/AuthBackground';
import Input from '../../components/input/Input';
import './signin.scss';

const SignIn = () => {

  const queryValues: string[] = ['name', 'age', 'email', 'password'];
  const [queryIndex, setQueryIndex] = useState(0);

  const handleClick = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setQueryIndex(n => n + 1);
  };

  const queryValue = queryValues[queryIndex];

  return(
    <AuthBackground>
      <div className="signIn">
        <img src="logo.svg" alt="TypeTask Pro Logo" className='logo'/>
        <div className="form-container">
          <form>
            <Input id={queryValue} placeholder={`enter your ${queryValue}`} label={queryValue} className='singIn-input'/>
            <button onClick={handleClick}>
              clica
            </button>
          </form>
        </div>
      </div>
    </AuthBackground>
  )
}

export default SignIn;