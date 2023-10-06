import { URL_LARUINAHUB_LOGIN, URL_LARUINAHUB_REGISTER } from '../../../middlewares/config';
import s from './MenuAuth.module.css';

export const MenuAuth = () => {
  return (
    <ul className={s.authMenu}>
      <a href={URL_LARUINAHUB_REGISTER}>Regístrate</a>
      <a className={s.loginButton} href={URL_LARUINAHUB_LOGIN}>Iniciar sesión</a>
    </ul>
  )
}
