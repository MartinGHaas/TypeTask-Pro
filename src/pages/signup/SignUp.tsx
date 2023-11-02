import { useState, useRef, useEffect, useContext, ChangeEvent } from 'react';
import AuthBackground from '../../components/authBackground/AuthBackground';
import Input from '../../components/input/Input';
import './signup.scss';
import { UserContext } from '../../context/UserContext';

const SignUp = () => {
  interface InputValues {
    [key: string]: string;
  }

  interface InputValidity {
    [key: string]: boolean;
  }

  const inputValues = [
    { id: 'email', validator: (value: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) },
    { id: 'password', validator: (value: string) => value.length >= 6 },
    { id: 'username', validator: (value: string) => value.length >= 3 }
  ];

  const inputRef = useRef<HTMLInputElement | null>(null);

  const { setUser } = useContext(UserContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [values, setValues] = useState<InputValues>({ email: '', password: '', username: '' });
  const [validity, setValidity] = useState<InputValidity>({ email: false, password: false, username: false });
  const [areInputsValid, setInputsValid] = useState<boolean>(false);
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);


  let errMsg;
  switch (inputValues[currentIndex].id) {
    case 'email':
      errMsg = 'you must provide an existing email';
      break;
    case 'password':
      errMsg = 'your password must include at least 6 digits';
      break;
    case 'username':
      errMsg = 'your username must include at least 3 digits';
      break;
  }

  useEffect(() => {
    inputRef.current?.focus();
    setHasAttemptedSubmit(false);
  }, [currentIndex]);

  useEffect(() => {
    const newValidity = { ...validity };

    for (let i = 0; i <= currentIndex; i++) {
      const input = inputValues[i];
      const isValid = input.validator(values[input.id]);
      newValidity[input.id] = isValid;
    }

    setValidity(newValidity);

    const areAllInputsValid = inputValues.slice(0, currentIndex + 1).every((input) => newValidity[input.id]);

    setInputsValid(areAllInputsValid);

  }, [values, currentIndex]);

  const handleClick = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    setHasAttemptedSubmit(true);

    if (areInputsValid) {
      setCurrentIndex(n => n + 1);
      if (currentIndex > inputValues.length - 1) {
        setUser(prevUser => ({ ...prevUser, isLogged: true }));

        // TODO: register new user
      }
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    setValues(prevValues => ({ ...prevValues, [id]: e.target.value }))
  }

  return (
    <AuthBackground>
      <div className="signUp">
        <img src="logo.svg" alt="TypeTask Pro Logo" className='logo' />
        <div className="form-container">
          <form>
            {inputValues.map(
              (value, i) => (
                i <= currentIndex &&
                <div className={'auth-signup'} key={i}>
                  <Input
                    id={value.id}
                    placeholder={`enter your ${value.id}`}
                    label={value.id}
                    type={value.id}
                    inputRef={inputRef}
                    value={values[value.id]}
                    handleChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, value.id)}
                  />

                  <button onClick={handleClick} className={`${i !== currentIndex ? 'd-none' : areInputsValid ? 'isAuth' : ''}`}>
                    {currentIndex === inputValues.length - 1 ? 'finish' : 'continue'}
                  </button>
                </div>
              ))
            }
          </form>

          {hasAttemptedSubmit && !areInputsValid && <span>{errMsg}</span>}
        </div>
      </div>
    </AuthBackground>
  )
}

export default SignUp;