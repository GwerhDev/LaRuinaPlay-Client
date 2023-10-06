import { useSelector } from 'react-redux';
import s from './MenuProfile.module.css';
import defaultUserIcon from '../../../assets/images/png/user-icon.png'
import { logout } from '../../../middlewares/redux/actions/auth';
import { $d } from '../../../functions';

export const MenuProfile = () => {
  const { profilePic } = useSelector(state => state.currentUser);
  
  function showMenu() {
    $d('#menu-profile-container').classList.toggle(s.showMenu)
  }

  return (
    <div className={s.container}>
      <div className={s.profilePicContainer} onClick={showMenu}>
        <img src={profilePic ? profilePic : defaultUserIcon} alt="" width="100%" />
      </div>
      <ul className={s.menuProfileContainer} id='menu-profile-container'>
        <li>Cuenta</li>
        <li>Perfil</li>
        <li className={s.separator} onClick={() => logout()}>Cerrar sesión</li>
      </ul>
    </div>
  )
}
