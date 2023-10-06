import s from './Navigator.module.css';
import { useSelector } from 'react-redux';
import { MenuAuth } from '../MenuAuth/MenuAuth';
import { MenuProfile } from '../MenuProfile/MenuProfile';

export const Navigator = () => {
  const currentUser = useSelector(state => state.currentUser);

  return (
    <nav>
      <div className={s.container}>
          {
            currentUser 
            ? <MenuProfile/>
            : <MenuAuth/>
          }
      </div>
    </nav>
  )
}
