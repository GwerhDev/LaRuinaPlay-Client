import s from './MyLibrary.module.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { lists } from '../../../assets/audio/consts';
import { useDispatch, useSelector } from 'react-redux';
import { getLibraryList, getAllPlaylist, resetPlaylist } from '../../../middlewares/redux/actions';
import folderIcon from '../../../assets/images/svg/folder-icon.svg';
import { createPlaylist } from '../../../middlewares/redux/actions/playlist';

export const MyLibrary = () => {
  const dispatch = useDispatch();
  const myPlaylists = useSelector(state => state.myPlaylists);
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
    dispatch(getAllPlaylist);
  }, [dispatch]);

  return (
    <div className={s.divPlaylistsCont}>
      <ul className={s.ulPlaylistCont}>
        <div className={s.titlePlaylistCont} onClick={() => dispatch(resetPlaylist())}>
          <img src={folderIcon} alt="my library" width={20} />
          <Link to="/library" className={s.titlePlaylist}>
            Mis Listas
          </Link>
        </div>
        <div className={s.divPlaylistsNames}>
          <ul className={s.ulPlaylistsNames}>
            {
              lists?.map((e, index) => {
                return (
                  <li key={index} onClick={() => dispatch(getLibraryList(e))} >
                    <Link to="/library">
                      <button onClick={() => dispatch(getLibraryList(e))} className={s.btnPlaylistNames}>
                        <h2>{e.title}</h2>
                      </button>
                    </Link>
                  </li>
                )
              })
            }
            {
              myPlaylists?.map((e, index) => {
                return (
                  <li key={index} className={s.liPlaylistsNames}>
                    <button className={s.btnPlaylistNames}>
                      <h2 className={s.title}>{e.title}</h2>
                    </button>
                  </li>
                )
              })
            }
            {
              create &&
              <input type="text" onInput={handleInput} />
            }
          </ul>
          <div className={s.separator} />
          {
            create
              ?
              <span className={s.buttonsContainer}>
                <button onClick={handleCreate} className={s.btnCreateList}>
                  <h2>Crear</h2>
                </button>
                <button onClick={handleCancel} className={s.btnCreateList}>
                  <h2>Cancelar</h2>
                </button>
              </span>
              :
              <button onClick={() => setCreate(true)} className={s.btnCreateList}>
                <h2>Crear una lista</h2>
              </button>
          }
        </div>
      </ul>
    </div>
  )
}
