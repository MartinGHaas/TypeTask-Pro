// Components
import ProtectedComponent from '@/components/protectedComponent/ProtectedComponent';
import Button from '@/components/button/Button';
import AuthBackground from '@/components/authBackground/AuthBackground';
import Input from '@/components/input/Input';
import ButtonLoginSocial from '@/components/buttonLoginSocial/ButtonLoginSocial';

// CSS Style
import './login.scss';

// Libs
import useCookiesTokenValidation from '@/libs/authValidation/useCookiesTokenValidation';
import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import Cookies from 'js-cookie';

// Zod Schemas
import { loginSchema } from '@/schemas/zodSchemas';

// Types
import { LoginFields } from '@/@types/schemasTypes';

const Login = () => {

  const tokenValidation = useCookiesTokenValidation();

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { isSubmitting, errors }, // * to handle a error --> 'error'
    watch
  } = useForm<LoginFields>({
    resolver: zodResolver(loginSchema),
  });

  const username = watch('username');
  const password = watch('password');
  const openToUpdateFields: string = username || password;

  const handleFormFilled = async (data: LoginFields) => {

    if (Object.keys(errors).length > 0) return;

    try {
      await axios.post('http://localhost:8080/auth/login', {
        username: data.username,
        password: data.password
      })
        .then(res => res.data)
        .then(data => {
          Cookies.set("userJWT", data.token, { expires: 30 });
        });

      return <Navigate to={'/'} />
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    try {
      loginSchema.parse({ username, password });
      clearErrors();
    } catch (e) {
      if (e instanceof z.ZodError) {
        setError(`root.${e.name}`, e);
      }
    }
  }, [username, password, setError, clearErrors])

  // TODO: Create error handler
  // ! This showCase should actually be integrated with 'user' state
  // ! in Redux Store. But React Redux <-> React-Router-Dom maybe have a problem.
  // ! For now, I'll use [useJWTValidation] method.
  // ! Notice that in this component RequireAuthToken isn't used becaused
  // ! of this.
  return (
    <ProtectedComponent showCase={!tokenValidation.hasValidProperties()}>
      <AuthBackground>
        <div className="form-container">
          <img src="..\..\..\public\logo.svg" alt="logo" className='logo' />
          <form onSubmit={handleSubmit(handleFormFilled)}>
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

            {!openToUpdateFields &&
              <div className={`form-container`}>
                <span>or sign up with</span>
                <ButtonLoginSocial text='Google Account' img={{ src: '..\\..\\..\\public\\GoogleLogo.svg' }} />
                <ButtonLoginSocial text='Facebook Account' img={{ src: '..\\..\\..\\public\\FacebookLogo.svg' }} className='fb-button' />
              </div>
            }

            {openToUpdateFields &&
              <div className={`form-container`}>
                <Input
                  inputProps={{
                    id: 'password',
                    placeholder: 'enter your password',
                    type: 'password',
                    ...register('password')
                  }}

                  labelProps={{
                    children: 'Password'
                  }}
                />
                <Button
                  isFilled={Object.keys(errors).length === 0}
                  animated
                >
                  {isSubmitting ? <>Loading...</> : <>Log In</>}
                </Button>
              </div>
            }

          </form>
          <p>don't have an account? <Link to='/auth/signup'><span>sign in</span></Link></p>
        </div>
      </AuthBackground>
    </ProtectedComponent>
  )
}

export default Login;