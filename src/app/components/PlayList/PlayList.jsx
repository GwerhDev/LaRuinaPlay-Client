import s from './PlayList.module.css';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContentDetails } from '../../../middlewares/redux/actions/content';
import { AddTrack } from '../Admin/AddTrack';
import { getTracklist } from '../../../middlewares/redux/actions/tracklist';
import { Track } from '../Track/Track';

export const PlayList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector(state => state.details);
  const tracklist = useSelector(state => state.tracklist);
  const currentUser = useSelector(state => state.currentUser);
  const editionActive = useSelector(state => state.editionActive);

  useEffect(() => {
    dispatch(getContentDetails(id));
    dispatch(getTracklist(id));
  }, [dispatch, id]);

  return (
    <div className="secundary-container">
      {
        details?.imageVisor
          ?
          <div className="header-playlist" style={{ backgroundImage: `url(${details?.imageVisor})` }}>
            <div className={s.headerContainer}>
              <div className={s.contImg}>
                <img className={s.imgList} src={details?.imageSlider} alt="default" height='100%' />
              </div>
              <div className={s.titleList}>
                <span className={s.contentType}>{details?.contentType}</span>
                <span className={s.title}>{details?.title}</span>
                <span className={s.tracks}>{details?.items?.length ? details?.items?.length + " pistas" : null}</span>
              </div>
            </div>
          </div>
          :
          <div className={s.empty}>
            <div className={s.headerContainer}>
              <div className={s.contImg}>
                <div className={s.empty} alt="default" height='100%' />
              </div>
              <div className={s.titleList}>
                <span className={s.contentType}>{details?.contentType}</span>
                <span className={s.title}>{details?.title}</span>
                <span className={s.tracks}>{details?.items?.length ? details?.items?.length + " pistas" : null}</span>
              </div>
            </div>
          </div>
      }

      <div className={s.tracker}>
        {
          currentUser?.role === "admin" && editionActive &&
          <AddTrack />
        }
        <ul className={s.tracklist}>
          {
            tracklist?.tracks?.map((e, index) => (
              <li key={index} >
                <Track data={e} />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}