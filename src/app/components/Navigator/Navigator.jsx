import s from './Navigator.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const Navigator = () => {
  return (
    <nav>
      <div className={s.container}>
        <ul className={s.authMenu}>
          <Link to="/register">Regístrate</Link>
          <Link to="/login">
            <button className={s.loginButton}>Iniciar sesión</button>
          </Link>
        </ul>
      </div>
    </nav>
  )
}
