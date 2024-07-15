import { useSelector } from 'react-redux';
import { getUserToken } from '../../../middlewares/helpers';
import s from './ConnectedApps.module.css';

export const ConnectedApps = () => {
  const currentUser = useSelector(state => state.currentUser);

  const urlMerch = 'https://merch.laruina.cl/';
  const urlTv = currentUser? 'https://tv.laruina.cl/auth?token=' + getUserToken() : 'https://tv.laruina.cl/';
  const urlHub = currentUser? 'https://hub.laruina.cl/auth/' + getUserToken() : 'https://hub.laruina.cl/';

  return (
    <div className={s.container}>
      <ul className={s.listContainer}>
        <p>Apps conectadas</p>
        <a href={urlHub}><li>Hub</li></a>
        <a href={urlTv}><li>TV</li></a>
        <a href={urlMerch}><li>Merch</li></a>
      </ul>
    </div>
  )
}
