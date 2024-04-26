import s from './Album.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getAlbumByContent } from '../../../middlewares/redux/actions/album';
import { Track } from '../Track/Track';
import defaultImg from '../../../assets/images/png/lista-icon.png';

export const Album = () => {
  const dispatch = useDispatch();
  const album = useSelector(state => state.album);
  const params = useParams();
  const { id } = params || null;

  useEffect(() => {
    dispatch(getAlbumByContent(id));
  }, [dispatch, id]);

  return (
    <div className="secundary-container">
      <div className={s.headerContainer}>
        <div className={s.contImg}>
          <img className={s.imgList} src={defaultImg} alt="default" height='100px' />
        </div>
        <div className={s.titleList}>
          {
            album &&
              <ul className={s.albumMetada}>
                <p className='font-default'>Álbum</p>
                <h1>{album.title} ({album.year})</h1>
                <h3>{album.artist}</h3>
                <p className='font-default'>{album.tracks?.length} items</p>
              </ul>
          }
        </div>
      </div>
      <div className={s.cont3}>
        {
          album?.tracks?.map((e, index) => {
            return (
              <li className={s.itemListLi} key={index} >
                <Track data={e}/>
              </li>
            )
          })
        }
      </div>
    </div>
  )
}
