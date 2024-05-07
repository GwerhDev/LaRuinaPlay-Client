import s from './Album.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { createAlbum, getAlbumByContent } from '../../../middlewares/redux/actions/album';
import { Track } from '../Track/Track';
import { StreamByImage } from '../../../functions';
import { createTrack } from '../../../middlewares/redux/actions/track';
import { setPlayer } from '../../../middlewares/redux/actions/player';
import { Player } from '../../../middlewares/interfaces/player';
import defaultImg from '../../../assets/images/png/lista-icon.png';
import addIcon from '../../../assets/images/svg/add-icon.svg';
import playIcon from '../../../assets/images/svg/play-icon.svg';
import shuffleIcon from '../../../assets/images/svg/shuffle-icon.svg';
import addTrackIcon from '../../../assets/images/svg/add-track-icon.svg';
import simpleMenuIcon from '../../../assets/images/svg/simple-menu-icon.svg';

export const Album = () => {
  const dispatch = useDispatch();
  const album = useSelector(state => state.album);
  const currentUser = useSelector(state => state.currentUser);
  const params = useParams();
  const { id } = params || null;
  const [editionActive, setEditionActive] = useState(false);
  const [trackTitle, setTrackTitle] = useState("");
  const [trackDriveIdLQ, setTrackDriveIdLQ] = useState("");
  const [trackDriveIdHQ, setTrackDriveIdHQ] = useState("");

  function handleCreateAlbum(e) {
    e.preventDefault()
    const formData = {
      year: e.target.year.value,
      contentId: id
    };

    dispatch(createAlbum(formData))
  };

  function handleCreateTrack(e) {
    e.preventDefault()
    const formData = {
      title: trackTitle,
      driveIdLQ: trackDriveIdLQ,
      driveIdHQ: trackDriveIdHQ,
      albumId: album.id
    };

    dispatch(createTrack(formData, id));
    setEditionActive(false);
    handleCantelCreateTrack(e);
  };

  function handleCantelCreateTrack(e) {
    e.preventDefault();
    setEditionActive(false);
    setTrackTitle("");
    setTrackDriveIdLQ("");
    setTrackDriveIdHQ("");
  };

  function handlePlayAlbum() {
    const player = new Player();
    player.show = true;
    player.tracklist = album.tracks;

    dispatch(setPlayer(player));
  };

  useEffect(() => {
    dispatch(getAlbumByContent(id));
  }, [dispatch, id]);

  return (
    <div className="secundary-container">
      <div className={s.headerContainer}>
        {
          album?.cover
            ?
            <img className={s.cover} src={StreamByImage(album.cover)} alt="default" width='100px' />
            :
            <span className={s.contImg}>
              <img src={defaultImg} alt="default" width='100px' />
            </span>
        }
        <div className={s.titleList}>
          {
            album
              ?
              <ul className={s.albumMetada}>
                <p className='font-default'>Álbum • {album.year}</p>
                <h1>{album.title}</h1>
                <h3>{album.artist}</h3>
                <p className='font-default'>
                  {
                    album.tracks?.length === 1
                      ? album.tracks?.length + " pista"
                      : album.tracks?.length + " pistas"
                  }
                </p>
              </ul>
              :
              <ul className={s.adminButtons}>
                {
                  currentUser?.role === 'admin' &&
                  <form className={s.createForm} onSubmit={handleCreateAlbum}>
                    <label htmlFor="year">Año lanzamiento</label>
                    <input name="year" type="number" />
                    <button type='submit' className={s.createButton}>Crear album</button>
                  </form>
                }
              </ul>
          }
        </div>
      </div>
      {
        album &&
        <ul className={s.albumOptionsContainer}>
          <span>
            <button>
              <img src={addIcon} alt="" width={20} />
            </button>

            <button>
              <img src={simpleMenuIcon} alt="" width={20} />
            </button>

            {
              currentUser?.role === 'admin' &&
              <button onClick={() => setEditionActive(true)}>
                <img src={addTrackIcon} alt="" width={20} />
              </button>
            }
          </span>
          {
            album?.tracks?.length &&
            <span>
              <button>
                <img src={shuffleIcon} alt="" width={20} />
              </button>

              <button>
                <li className={s.playButton} onClick={handlePlayAlbum}>
                  <img src={playIcon} alt="" width={15} />
                </li>
              </button>
            </span>
          }
        </ul>
      }
      <div className={s.cont3}>
        {
          currentUser?.role === "admin" && editionActive &&
          <li className={s.createTrack} >
            <form className={s.createForm}>
              <ul className={s.createTrackInputContainer}>
                <li>
                  <label htmlFor="title-track">Título</label>
                  <input name='title-track' type="text" onInput={e => setTrackTitle(e.target.value)} />
                </li>
                <li>
                  <label htmlFor="drive-id-lq-track">driveIdLQ</label>
                  <input name='drive-id-lq-track' onInput={e => setTrackDriveIdLQ(e.target.value)} type="text" />
                </li>
                <li>
                  <label htmlFor="drive-id-hq-track">driveIdHQ</label>
                  <input name='drive-id-hq-track' onInput={e => setTrackDriveIdHQ(e.target.value)} type="text" />
                </li>
              </ul>
              <span className={s.buttonsContainer}>
                <button className={s.createButton} onClick={handleCreateTrack}>Crear track</button>
                <button className={s.cancelButton} onClick={handleCantelCreateTrack}>Cancelar</button>
              </span>
            </form>
          </li>
        }
        {
          album?.tracks?.map((e, index) => {
            return (
              <li className={s.itemListLi} key={index} >
                <Track data={e} contentId={id}/>
              </li>
            )
          })
        }
      </div>
    </div>
  )
}
