import s from './MenuProfile.module.css';
import { useSelector } from 'react-redux';
import { logout } from '../../../middlewares/redux/actions/auth';
import { $d } from '../../../functions';
import { getUserToken } from '../../../middlewares/helpers';
import defaultUserIcon from '../../../assets/images/svg/user-icon.svg'

export const MenuProfile = () => {
  const currentUser =  useSelector(state => state.currentUser);
  const { profilePic, username } = currentUser || null;
  const urlHub = currentUser? 'https://hub.laruina.cl/auth/' + getUserToken() : 'https://hub.laruina.cl/';

  function showMenu() {
    $d('#menu-profile-list-container').style.display = 'block'
  }

  document.addEventListener('click', (e) => {
    if (!$d('#menu-profile-container').contains(e.target)) {
      $d('#menu-profile-list-container').style.display = 'none';
    };
  });

  return (
    <div className={s.container} id='menu-profile-container'>
      <div className={s.profilePicContainer} onClick={showMenu}>
        <img src={profilePic ? profilePic : defaultUserIcon} alt="" width="100%" />
      </div>
      <ul className={s.menuProfileContainer} id='menu-profile-list-container'>
        <ul>
          <img src={profilePic ? profilePic : defaultUserIcon} alt="" width="100px" />
          <p>Hola, {username ?? "usuario"}</p>
        </ul>

        <li>Perfil</li>
        <a href={urlHub}>
          <li>
            Centro de cuentas
          </li>
        </a>

        <div className={s.separator}></div>

        <li onClick={() => logout()}>Cerrar sesión</li>
      </ul>
    </div>
  )
}
