import { Link } from 'react-router-dom';
import ButtonLoginSocial from '../../components/buttonLoginSocial/ButtonLogInSocial';
import Input from '../../components/input/Input';
import './login.scss';

const Login = () => {
  return(
    <div className='login'>
      <div className="login-container">
        <div className="form-container">
          <img src="logo.svg" alt="logo" className='logo'/>
          <form>
            <Input id='email' type='email' placeholder='enter your e-mail' label='E-mail' />
            <span>or sign in with</span>
            <ButtonLoginSocial text='Google Account' img={{src: 'GoogleLogo.svg'}}/>
            <ButtonLoginSocial text='Facebook Account' img={{src: 'FacebookLogo.svg'}} className='fb-button'/>
          </form>
          <p>don't have an account? <Link to='/signin'><span>sign in</span></Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login;