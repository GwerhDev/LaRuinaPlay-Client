import LoginGoogle from '../components/LoginGoogle/LoginGoogle';
import LoginHub from '../components/LoginHub/LoginHub';
import s from './Login.module.css';

const Login = () => {
  return (
    <div className={s.container}>
      <main className={s.main}>
        Inicia sesión con:
        <LoginGoogle/>
        <LoginHub/>
      </main>
    </div>
  )
}

export default Login;