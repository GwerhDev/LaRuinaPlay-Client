import { useDispatch } from 'react-redux';
import s from './Track.module.css';
import { Player } from '../../../middlewares/interfaces/player';
import { setPlayer } from '../../../middlewares/redux/actions/player';
import simpleMenu from '../../../assets/images/svg/simple-menu-icon.svg';
import addIcon from '../../../assets/images/svg/add-icon.svg';

export const Track = (props) => {
  const dispatch = useDispatch();
  const { data } = props;

  function playTrack(id) {
    const player = new Player();
    player.show = true;
    player.tracklist = [{
      url: `https://drive.google.com/uc?export=download&id=${id}`,
      id: data.id,
      title: data.title,
      artist: data.artist,
      cover: data.cover
    }];
    dispatch(setPlayer(player));
  };

  return (
    <span className={s.itemListBtn}>
      <ul className={s.itemInfo}>
        <span className={s.itemData} onClick={() => playTrack(data.driveIdHQ)}>
          <li>{data.itemId}</li>
          <ul>
            <li>{data.title}</li>
            <li className={s.contentArtist}>{data.artist}</li>
          </ul>
        </span>
        <span className={s.userButtons}>
          <li><img src={addIcon} alt='fav' height='20px' /></li>
          <li><img src={simpleMenu} alt='fav' height='20px' /></li>
        </span>
      </ul>
    </span>
  )
}
