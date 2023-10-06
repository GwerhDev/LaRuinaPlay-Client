import s from './MenuProfile.module.css';
import { useSelector } from 'react-redux';
import { logout } from '../../../middlewares/redux/actions/auth';
import { $d } from '../../../functions';
import defaultUserIcon from '../../../assets/images/png/user-icon.png'

export const MenuProfile = () => {
  const { profilePic } = useSelector(state => state.currentUser);
  
  function showMenu() {
    $d('#menu-profile-list-container').style.display='block'
  }

  document.addEventListener('click', (e) => {
    if(!$d('#menu-profile-container').contains(e.target)) {
      $d('#menu-profile-list-container').style.display='none';
    };
  });

  return (
    <div className={s.container} id='menu-profile-container'>
      <div className={s.profilePicContainer} onClick={showMenu}>
        <img src={profilePic ? profilePic : defaultUserIcon} alt="" width="100%" />
      </div>
      <ul className={s.menuProfileContainer} id='menu-profile-list-container'>
        <li>Cuenta</li>
        <li>Perfil</li>
        <li className={s.separator} onClick={() => logout()}>Cerrar sesión</li>
      </ul>
    </div>
  )
}
