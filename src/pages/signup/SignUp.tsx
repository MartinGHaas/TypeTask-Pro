import { useState, useRef, useEffect, useContext, ChangeEvent } from 'react';
import AuthBackground from '../../components/authBackground/AuthBackground';
import Input from '../../components/input/Input';
import './signup.scss';
import { UserContext } from '../../context/UserContext';

/**
 * TypeTask's Sign Up page
 * @returns {JSX.Element}
 */
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
  const [errMsg, setErrMsg] = useState('');

  /**
   * Focus the last created input for better user experience. 
   * Sets'hasAttemptedSubmit' to false to reset its state for a new Input.
   */
  useEffect(() => {
    inputRef.current?.focus();
    setHasAttemptedSubmit(false);
  }, [currentIndex]);

  /**
   * Validates the inputs values by checking its value
   * with its validator function. By validating, it changes
   * the validity, areInputsValid and errMsg states.
   * It only toggles when 'values' or 'currentIndex'
   * states change.
   * 
   * @param {InputValidity} newValidity clones validity state to manipulate validity
   * in real time.
   * 
   * @param {boolean} areAllInputsValid checks if all Inputs are valid
   */
  useEffect(() => {
    const newValidity = { ...validity };

    for (let i = 0; i <= currentIndex; i++) {
      const input = inputValues[i];
      const isValid = input.validator(values[input.id]);
      newValidity[input.id] = isValid;

      if (!isValid) {
        switch (input.id) {
          case 'email':
            setErrMsg('you must provide an existing email');
            break;
          case 'password':
            setErrMsg('your password must include at least 6 digits');
            break;
          case 'username':
            setErrMsg('your username must include at least 3 digits');
            break;
        }
      }
    }

    setValidity(newValidity);

    const areAllInputsValid = inputValues.slice(0, currentIndex + 1).every((input) => newValidity[input.id]);

    setInputsValid(areAllInputsValid);

  }, [values, currentIndex]);

  /**
   * Handle the 'continue/finish' button click action,
   * changing the state of HasAttemptedSubmit and
   * checking the validity of the Inputs. If true
   * it procceeds w/ the form, if not, it messages the
   * user with the errMsg.
   * 
   * @param {React.FormEvent<HTMLElement>} e button's click event.
   * 
   * @todo implement function to create a new User
   */
  const handleClick = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    setHasAttemptedSubmit(true);

    if (areInputsValid) {
      setCurrentIndex(n => n + 1);
      if (currentIndex > inputValues.length - 1) {
        setUser(prevUser => ({ ...prevUser, isLogged: true }));
      }
    }
  };

  /**
   * Handle w/ Input's change action by
   * setting the values state.
   * 
   * @param {ChangeEvent<HTMLInputElement>} e Input's change event.
   * @param {string} id Input's id for setting values state.
   */
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