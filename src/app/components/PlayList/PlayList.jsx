import s from './PlayList.module.css';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Navigator } from "../Navigator/Navigator"
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContentDetails } from '../../../middlewares/redux/actions/content';
import { RenderDriveImage } from '../../../functions';

export const PlayList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector(state => state.details)

  useEffect(() => {
    dispatch(getContentDetails(id))
  }, [dispatch, id]);

  return (
    <section className="section-container">
      <div className="primary-container">
        <Navigator />
        <div className="secundary-container">
          <div className="header-playlist" style={{ backgroundImage: `url(${RenderDriveImage(details?.imageVisor)})`}}>
            <div className={s.headerContainer}>
              <div className={s.contImg}>
                <img className={s.imgList} src={RenderDriveImage(details?.imageSlider)} alt="default" height='100%' />
              </div>
              <div className={s.titleList}>
                <span className={s.contentType}>{details?.contentType}</span>
                <span className={s.title}>{details?.title}</span>
                <span className={s.tracks}>{details?.items?.length? details?.items?.length + " pistas" : null}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="main-section">

        </div>
      </div>
    </section>
  )
}