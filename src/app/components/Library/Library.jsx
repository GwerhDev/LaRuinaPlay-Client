import s from './Library.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import defaultImg from '../../../assets/images/png/lista-icon.png';
import { getPlaylist } from '../../../middlewares/redux/actions/playlist';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getTracklist } from '../../../middlewares/redux/actions/tracklist';
import { Track } from '../Track/Track';

export const Library = () => {
  const dispatch = useDispatch();
  const tracklist = useSelector(state => state.tracklist);
  const details = useSelector(state => state.details);
  const params = useParams();
  const { id } = params || null;

  useEffect(() => {
    dispatch(getPlaylist(id));
    dispatch(getTracklist(id));
  }, [dispatch, id]);

  return (
    <div className="secundary-container">
      <div className={s.headerContainer}>
        <div className={s.contImg}>
          <img className={s.imgList} src={defaultImg} alt="default" height='100px' />
        </div>
        <div className={s.titleList}>
          {
            details &&
              <>
                <h3>Lista</h3>
                <h1>{details?.name}</h1>
                <h2>{details?.items?.length} items</h2>
              </>
          }
        </div>
      </div>
      <div className={s.cont3}>
        {
          tracklist?.tracks?.map((e, index) => {
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
