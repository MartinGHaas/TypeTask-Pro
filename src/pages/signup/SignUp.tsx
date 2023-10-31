import { useState, useRef, useEffect, useContext, ChangeEvent } from 'react';
import AuthBackground from '../../components/authBackground/AuthBackground';
import Input from '../../components/input/Input';
import './signup.scss';
import { UserContext } from '../../context/UserContext';

const SignUp = () => {
  const EMAIL: string = 'email';
  const PASSWORD: string = 'password';
  const USERNAME: string = 'username'
  const inputValues: string[] = [EMAIL, PASSWORD, USERNAME];

  const inputRef = useRef<HTMLInputElement | null>(null);
  
  const { setUser } = useContext(UserContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    inputRef.current?.focus();
  }, [currentIndex]);

  const handleClick = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    // TODO: check input values

    setCurrentIndex(n => n + 1);
    if(currentIndex === 2) {
      setUser(prevUser => ({...prevUser, isLogged: true}));

      // TODO: register new user
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, value: string) => {
    switch(value){
      case EMAIL:
        setEmail(e.target.value);
        break
      case PASSWORD:
        setPassword(e.target.value);
        break;
      case USERNAME:
        setUsername(e.target.value);
        break;
    }
  }

  return(
    <AuthBackground>
      <div className="signUp">
        <img src="logo.svg" alt="TypeTask Pro Logo" className='logo'/>
        <div className="form-container">
          <form>
            {
              inputValues.map((value, i) => (
                i <= currentIndex &&
                <div className={'auth-signup'} key={i}>
                  <Input
                    id={value}
                    placeholder={`enter your ${value}`}
                    label={value}
                    type={value}
                    inputRef={inputRef}
                    value={value === EMAIL ? email : value === PASSWORD ? password : username}
                    handleChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, value)}
                  />

                  <button onClick={handleClick} className={i === currentIndex ? '' : 'd-none'}>
                    {currentIndex === inputValues.length - 1 ? 'finish' : 'continue'}
                  </button>
                </div>
              ))
            }
          </form>
        </div>
      </div>
    </AuthBackground>
  )
}

export default SignUp;