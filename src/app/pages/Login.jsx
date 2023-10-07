import LoginGoogle from '../components/LoginGoogle/LoginGoogle';
import LoginHub from '../components/LoginHub/LoginHub';
import s from './Login.module.css';

const Login = () => {
  return (
    <div className={s.container}>
      <main className={s.main}>
        <h1>Inicia sesión el La Ruina Play</h1>
        <div className={s.buttons}><LoginGoogle/></div>
        <div className={s.buttons}><LoginHub/></div>
      </main>
    </div>
  )
}

export default Login;