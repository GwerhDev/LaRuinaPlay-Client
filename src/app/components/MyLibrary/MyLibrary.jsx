import s from './MyLibrary.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import { resetPlaylist } from '../../../middlewares/redux/actions/playlist';
import { createPlaylist, getPlaylists } from '../../../middlewares/redux/actions/playlist';
import { Playlist } from './Playlist';
import addIcon from '../../../assets/images/svg/add-icon.svg';
import searchIcon from '../../../assets/images/svg/search-icon.svg';
import folderIcon from '../../../assets/images/svg/folder-icon.svg';

export const MyLibrary = () => {
  const dispatch = useDispatch();
  const myPlaylists = useSelector(state => state.myPlaylists);
  const currentUser = useSelector(state => state.currentUser);
  const [create, setCreate] = useState(false);
  const [formData, setFormData] = useState(null);

  function handleCreate() {
    setCreate(false);
    dispatch(createPlaylist(formData));
  };

  function handleCancel() {
    setCreate(false);
  };

  function handleInput(e) {
    setFormData({
      name: e.target.value
    });
  };

  useEffect(() => {
    dispatch(getPlaylists());
  }, [dispatch]);

  return (
    <ul className={s.container}>
      <div className={s.titlePlaylistCont}>
        <span className={s.titleContainer}>
          <img src={folderIcon} alt="my library" width={20} />
          <Link to="/library" onClick={() => dispatch(resetPlaylist())} className={s.titlePlaylist}>
            Mis Listas
          </Link>
        </span>
        <span className={s.buttonsContainer}>
          <button className={s.btnCreateList}>
            <img src={searchIcon} alt="my library" width={20} />
          </button>
          <button onClick={() => setCreate(true)} className={s.btnCreateList}>
            <img src={addIcon} alt="my library" width={20} />
          </button>
        </span>
      </div>
      <div className={s.separator} />

      {
        currentUser &&
        <div className={s.divPlaylistsNames}>
          <ul className={s.ulPlaylistsNames}>
            {
              create &&
              <ul className={s.creationContainer}>
                <input type="text" onInput={handleInput} />
                <span className={s.buttonsContainer}>
                  <button onClick={handleCreate} className={s.btnCreateList}>
                    <h2>Crear</h2>
                  </button>
                  <button onClick={handleCancel} className={s.btnCreateList}>
                    <h2>Cancelar</h2>
                  </button>
                </span>
              </ul>
            }
            {
              myPlaylists?.map((e, index) => {
                return (
                  <li key={index} className={s.liPlaylistsNames}>
                    <Playlist id={e.id} name={e.name} />
                  </li>
                )
              })
            }
          </ul>
        </div>
      }
    </ul>
  )
}
