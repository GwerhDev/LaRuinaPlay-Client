import LoginGoogle from '../components/LoginGoogle/LoginGoogle';
import LoginHub from '../components/LoginHub/LoginHub';
import s from './Login.module.css';

const Login = () => {
  return (
    <div className={s.container}>
      Inicia sesión con:
      <LoginGoogle/>
      <LoginHub/>
    </div>
  )
}

export default Login;