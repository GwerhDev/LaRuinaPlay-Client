import { useSelector } from 'react-redux';
import { URL_LARUINAHUB_LOGIN, URL_LARUINAHUB_REGISTER } from '../../../middlewares/config';
import s from './Navigator.module.css';

export const Navigator = () => {
  const currentUser = useSelector(state => state.currentUser);

  return (
    <nav>
      <div className={s.container}>
          {
            currentUser 
            ? null
            : <ul className={s.authMenu}>
                <a href={URL_LARUINAHUB_REGISTER}>Regístrate</a>
                <a className={s.loginButton} href={URL_LARUINAHUB_LOGIN}>Iniciar sesión</a>
              </ul>
          }
      </div>
    </nav>
  )
}
