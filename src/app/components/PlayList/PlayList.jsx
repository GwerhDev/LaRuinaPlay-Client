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
        <Navigator/>
        <div className="header-playlist">
          <img src={RenderDriveImage(details.imageVisor)} className={s.headerImage} alt="" width="100%"/>
        </div>
        <div className="main-section">

        </div> 
      </div>
    </section>
  )
}