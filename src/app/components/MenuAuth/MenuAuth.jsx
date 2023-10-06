import s from './MenuAuth.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { URL_LARUINAHUB_REGISTER } from '../../../middlewares/config';

export const MenuAuth = () => {
  return (
    <ul className={s.authMenu}>
      <a href={URL_LARUINAHUB_REGISTER}>Regístrate</a>
      <Link className={s.loginButton} to='/login'>Iniciar sesión</Link>
    </ul>
  )
}
