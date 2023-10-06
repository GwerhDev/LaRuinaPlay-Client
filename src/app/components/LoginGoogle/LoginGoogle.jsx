import s from './LoginGoogle.module.css';
import { URL_API } from '../../../middlewares/config';

const LoginGoogle = () => {
  return (
    <a className={s.googleButton} href={`${URL_API}/login-google`}>
      <button>
        LoginGoogle
      </button>
    </a>
  )
}

export default LoginGoogle;