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
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;