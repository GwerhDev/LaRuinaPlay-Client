import { useDispatch, useSelector } from 'react-redux';
import { URL_LARUINAHUB_LOGIN, URL_LARUINAHUB_REGISTER } from '../../../middlewares/config';
import s from './Navigator.module.css';
import { useEffect } from 'react';
import { getUserData } from '../../../middlewares/redux/actions/account';

export const Navigator = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);

  useEffect(() => {
    dispatch(getUserData())
  }, [dispatch]);

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
