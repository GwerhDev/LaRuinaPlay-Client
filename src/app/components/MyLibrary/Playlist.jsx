import s from './Playlist.module.css';
import { useDispatch } from 'react-redux';
import deleteIcon from '../../../assets/images/svg/delete-icon.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { deletePlaylist } from '../../../middlewares/redux/actions/playlist';

export const Playlist = (props) => {
  const dispatch = useDispatch();
  const { id, name } = props;

  function handleDelete() {
    dispatch(deletePlaylist(id));
  };

  return (
    <span className={s.container}>
      <Link to={'/library'} onClick={handleDelete} className={s.deleteButton}>
        <img src={deleteIcon} alt="" height="15" />
      </Link>
      <Link to={`/library/${id}`} className={s.btnPlaylistNames}>
        <h2 className={s.title}>{name}</h2>
      </Link>
    </span>
  )
}
