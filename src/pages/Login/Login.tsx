import { ChangeEvent, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import ButtonLoginSocial from '../../components/buttonLoginSocial/ButtonLoginSocial';
import Input from '../../components/input/Input';
import './login.scss';
import AuthBackground from '../../components/authBackground/AuthBackground';
import Button from '../../components/button/Button';
import { validateEmail, validatePassword } from '../../utils/validation/inputValidators';
import ProtectedComponent from '../../components/protectedComponent/protectedComponent';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

const FIELD_KEYS = {
  EMAIL: 'email',
  PASSWORD: 'password',
};

const Login = () => {
  const user = useSelector((state: RootState) => state.user);
  const [values, setValues] = useState({ [FIELD_KEYS.EMAIL]: '', [FIELD_KEYS.PASSWORD]: '' });
  const [validity, setValidity] = useState({ [FIELD_KEYS.EMAIL]: false, [FIELD_KEYS.PASSWORD]: false });
  const [areValid, setValid] = useState(false);
  const { email, password } = values;
  const hasEmail: boolean = email !== '' || password !== '';

  type ValueKeys = 'email' | 'password';

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // TODO: validate user
  }

  const validateValues = useCallback((key: ValueKeys): boolean => {
    const value = values[key];

    switch (key) {
      case FIELD_KEYS.EMAIL:
        return validateEmail(value);
      case FIELD_KEYS.PASSWORD:
        return validatePassword(value);
      default:
        throw new Error('Invalid field key');
    }
  }, [values]);

  useEffect(() => {
    const valuesProps = Object.keys(values) as ValueKeys[];
    const newValidity = { ...validity };

    valuesProps.forEach((prop) => {
      newValidity[prop] = validateValues(prop);
    });

    const allValid = Object.values(newValidity).every(value => value);

    setValid(allValid);
    setValidity(newValidity);
  }, [values, validateValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    setValues(prevValues => ({ ...prevValues, [id]: e.target.value }));
  }

  return (
    <ProtectedComponent showCase={user.id !== ''}>
      <AuthBackground>
        <div className="form-container">
          <img src="logo.svg" alt="logo" className='logo' />
          <form onSubmit={handleSubmit}>
            <Input
              id='email'
              type='email'
              placeholder='enter your e-mail'
              label='E-mail'
              handleChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, 'email')}
            />

            {!hasEmail &&
              <div className={`form-container`}>
                <span>or sign up with</span>
                <ButtonLoginSocial text='Google Account' img={{ src: 'GoogleLogo.svg' }} />
                <ButtonLoginSocial text='Facebook Account' img={{ src: 'FacebookLogo.svg' }} className='fb-button' />
              </div>
            }

            {hasEmail &&
              <div className={`form-container`}>
                <Input
                  id='password'
                  label='Password'
                  placeholder='enter your password'
                  type='password'
                  handleChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, 'password')}
                />
                <Button isFilled={areValid} animated={areValid}>
                  Log In
                </Button>
              </div>
            }

          </form>
          <p>don't have an account? <Link to='/signup'><span>sign in</span></Link></p>
        </div>
      </AuthBackground>
    </ProtectedComponent>
  )
}

export default Login;