import s from './Navigator.module.css';
import { useSelector } from 'react-redux';
import { MenuAuth } from '../MenuAuth/MenuAuth';
import { MenuProfile } from '../MenuProfile/MenuProfile';
import backIcon from '../../../assets/images/svg/back-arrow-icon.svg';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export const Navigator = () => {
  const currentUser = useSelector(state => state.currentUser);
  const location = useLocation();
  const history = useHistory();
  
  function handleBack() {
    history.push("/")
  };

  return (
    <nav>
      <div className={s.container}>
        {
          currentUser
            ? <MenuProfile />
            : <MenuAuth />
        }
        {
          location.pathname !== '/browser' &&
          <button className={s.backButton} onClick={handleBack}>
            <img src={backIcon} alt="" width={20} />
          </button>
        }
      </div>
    </nav>
  )
}
