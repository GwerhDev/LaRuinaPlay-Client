import { useDispatch } from 'react-redux';
import s from './Track.module.css';
import { setPlayer } from '../../../middlewares/redux/actions/player';
import favIcon from '../../../assets/images/png/like-icon.png';
import { Player } from '../../../middlewares/interfaces/player';

export const Track = (props) => {
  const dispatch = useDispatch();
  const { data } = props;

  function playTrack(id) {
    const player = new Player();
    player.url = `https://drive.google.com/uc?export=download&id=${id}`;
    dispatch(setPlayer(player));
  };

  return (
    <button className={s.itemListBtn} onClick={() => playTrack(data.driveIdHQ)}>
      <ul className={s.itemInfo}>
        <span className={s.itemData}>
          <li>{data.itemId}</li>
          <ul>
            <li>{data.title}</li>
            <li className={s.contentArtist}>{data.artist}</li>
          </ul>
        </span>
        <li></li>
        <li><img className={s.favIcon} src={favIcon} alt='fav' height='20px' /></li>
      </ul>
    </button>
  )
}
