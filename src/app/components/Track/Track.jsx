import s from './Track.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Player } from '../../../middlewares/interfaces/player';
import { setPlayer } from '../../../middlewares/redux/actions/player';
import addIcon from '../../../assets/images/svg/add-icon.svg';
import deleteIcon from '../../../assets/images/svg/delete-icon.svg';
import simpleMenu from '../../../assets/images/svg/simple-menu-icon.svg';
import { useState } from 'react';
import { deleteTrack } from '../../../middlewares/redux/actions/track';

export const Track = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser)
  const { data, contentId } = props;
  const [deletingActive, setDeletingActive] = useState(false);

  async function playTrack() {
    const player = new Player();
    player.show = true;
    player.tracklist = [{
      id: data.id,
      url: data.url,
      cover: data.cover,
      title: data.title,
      artist: data.artist,
    }];
    dispatch(setPlayer(player));
  };

  function handleDelete() {
    dispatch(deleteTrack(data.id, contentId));
  };

  return (
    <span className={s.itemListBtn}>
      <ul className={s.itemInfo}>
        <span className={s.itemData} onClick={playTrack}>
          <li>{data.itemId}</li>
          <ul>
            <li>{data.title}</li>
            <li className={s.contentArtist}>{data.artist}</li>
          </ul>
        </span>
        <span className={s.userButtons}>
          {
            currentUser?.role === "admin" &&
            <li>
              {
                !deletingActive 
                ?
                <img onClick={() => setDeletingActive(true)} src={deleteIcon} alt='delete' height='15' />
                :
                <span className={s.deleteButtonsContainer}>
                  <button onClick={handleDelete}>✔️</button>
                  <button onClick={() => setDeletingActive(false)}>❌</button>
                </span>
              }
            </li>
          }
          <li><img src={addIcon} alt='fav' height='20px' /></li>
          <li><img src={simpleMenu} alt='menu' height='20px' /></li>
        </span>
      </ul>
    </span>
  )
}
