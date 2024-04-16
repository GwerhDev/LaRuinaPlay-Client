import s from './MyLibrary.module.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { lists } from '../../../assets/audio/consts';
import { useDispatch, useSelector } from 'react-redux';
import { getLibraryList, getAllPlaylist, resetPlaylist } from '../../../middlewares/redux/actions';
import folderIcon from '../../../assets/images/svg/folder-icon.svg';

export const MyLibrary = () => {
  const dispatch = useDispatch();
  const myPlaylists = useSelector(state => state.myPlaylists);

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
          </ul>
          <div className={s.separator} />
          <button className={s.btnCreateList}>
            <h2>Crear una lista</h2>
          </button>
        </div>
      </ul>
    </div>
  )
}
