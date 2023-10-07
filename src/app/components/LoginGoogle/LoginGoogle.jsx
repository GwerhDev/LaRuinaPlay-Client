import s from './LoginGoogle.module.css';
import googleIcon from "../../../assets/images/png/google-icon.png";
import { URL_API } from '../../../middlewares/config';

const LoginGoogle = () => {
  return (
    <div className={s.googleLoginContainer}>
      <a className={s.googleBtn} href={`${URL_API}/login-google`}>
        <span className={s.spanIcon}>
          <img
            src={googleIcon}
            height="40px"
            className={s.googleImg}
            alt="Sign Up with Google"
          />
        </span>
        <span className={s.spanText}>
          Google
        </span>
      </a>
    </div>
  )
}

export default LoginGoogle;