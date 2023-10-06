import { useSelector } from 'react-redux';
import s from './MenuProfile.module.css';
import defaultUserIcon from '../../../assets/images/png/user-icon.png'

export const MenuProfile = () => {
  const { profilePic } = useSelector(state => state.currentUser);

  return (
    <div className={s.container}>
      <div className={s.profilePicContainer}>
        <img src={profilePic? profilePic : defaultUserIcon} alt="" width="100%"/>
      </div>
    </div>
  )
}
