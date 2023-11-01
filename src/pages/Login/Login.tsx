import { Link } from 'react-router-dom';

import ButtonLoginSocial from '../../components/buttonLoginSocial/ButtonLoginSocial';
import Input from '../../components/input/Input';
import './login.scss';
import AuthBackground from '../../components/authBackground/AuthBackground';

const Login = () => {

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  }

  return(
    <AuthBackground>
      <div className="form-container">
        <img src="logo.svg" alt="logo" className='logo'/>
        <form onSubmit={handleSubmit}>
          <Input id='email' type='email' placeholder='enter your e-mail' label='E-mail' />
          <span>or sign in with</span>
          <ButtonLoginSocial text='Google Account' img={{src: 'GoogleLogo.svg'}}/>
          <ButtonLoginSocial text='Facebook Account' img={{src: 'FacebookLogo.svg'}} className='fb-button'/>
        </form>
        <p>don't have an account? <Link to='/signup'><span>sign in</span></Link></p>
      </div>
    </AuthBackground>
  )
}

export default Login;