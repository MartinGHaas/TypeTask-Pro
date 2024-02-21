// Components
import AuthBackground from '@/components/authBackground/AuthBackground';
import Input from '@/components/input/Input';
import Modal from '@/components/modal/Modal';
import Button from '@/components/button/Button';
import ProtectedComponent from '@/components/protectedComponent/ProtectedComponent';
import useCookiesTokenValidation from '@/libs/authValidation/useCookiesTokenValidation';

// CSS Style 
import './signup.scss';

// Libs
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

// Zod Schemas
import { signUpSchema } from '@/schemas/zodSchemas';

// Types
import { SignUpFields } from '@/@types/schemasTypes';

/**
 * TypeTask's Sign Up page
 * @returns {JSX.Element}
 * @author MartinGHaas
 */
const SignUp = (): JSX.Element => {

  const [isSubmitted, setSubmited] = useState<boolean>(false);
  const tokenValidation = useCookiesTokenValidation();

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { isSubmitting, errors },
    watch
  } = useForm<SignUpFields>({
    resolver: zodResolver(signUpSchema)
  });

  const handleSignUpForm = (data: SignUpFields) => {

    if (Object.keys(errors).length > 0) return;

    axios.post('http://localhost:8080/auth/register', {
      username: data.username,
      password: data.password
    })
      .catch(e => console.log(e));
    setSubmited(true);
  }

  const username = watch('username');
  const email = watch('email');
  const password = watch('password');

  useEffect(() => {
    try {
      signUpSchema.parse({ username, email, password });
      clearErrors();
    } catch (e) {
      if (e instanceof z.ZodError) {
        setError(`root.${e.name}`, e);
      }
    }
  }, [clearErrors, setError, username, email, password])

  // ! Notice that in this component RequireAuthToken isn't used becaused
  // ! of react redux. Later I will alter to a better verification.
  return (
    <ProtectedComponent showCase={!tokenValidation.hasValidProperties()}>
      <AuthBackground>
        <div className="signUp">
          <img src="..\..\..\public\logo.svg" alt="TypeTask Pro Logo" className='logo' />
          <div className="signup-form-container">
            <form>
              <div className={'auth-signup'}>
                <Input
                  inputProps={{
                    id: 'username',
                    type: 'text',
                    placeholder: 'enter your username',
                    ...register('username')
                  }}
                  labelProps={{
                    children: 'Username'
                  }}
                />

                <Input
                  inputProps={{
                    id: 'email',
                    type: 'email',
                    placeholder: 'enter your email',
                    ...register('email')
                  }}
                  className={username || email || password ? '' : 'd-none'}
                  labelProps={{
                    children: 'E-mail'
                  }}
                />

                <Input
                  inputProps={{
                    id: 'password',
                    type: 'password',
                    placeholder: 'enter your password',
                    ...register('password')
                  }}
                  className={password || email ? '' : 'd-none'}
                  labelProps={{
                    children: 'Password'
                  }}
                />

                <Button
                  onClick={handleSubmit(handleSignUpForm)}
                  isFilled={Object.keys(errors).length === 0}
                  animated
                >
                  {isSubmitting ? <>Loading...</> : <>Continue</>}
                </Button>
              </div>
            </form>
          </div>
        </div>

        {isSubmitted &&
          <Modal className='verification-modal'>
            <h1>Thank You!</h1>
            <p>We've sent you a verification email!</p>

            <div className="modal-button-container">
              <Link to='/auth/login' style={{ textDecoration: 'none' }}>
                <Button
                  isFilled
                  animated
                >
                  Go back to Login
                </Button>
              </Link>

              <Link to='/docs' style={{ textDecoration: 'none' }}>
                <Button animated >See the docs</Button>
              </Link>
            </div>
          </Modal>
        }
      </AuthBackground>
    </ProtectedComponent>
  )
}

export default SignUp;