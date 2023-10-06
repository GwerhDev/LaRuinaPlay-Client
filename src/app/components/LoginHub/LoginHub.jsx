import s from './LoginHub.module.css';
import { URL_LARUINAHUB_LOGIN } from '../../../middlewares/config';

const LoginHub = () => {
  return (
    <a className={s.googleButton} href={URL_LARUINAHUB_LOGIN}>
      <button>
        LoginHub
      </button>
    </a>
  )
}

export default LoginHub;