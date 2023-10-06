import s from './Content.module.css';
import { useSelector } from 'react-redux';
import { RenderDriveImage } from '../../../functions';
import defaulBackground from '../../../assets/images/png/default-background.png';
import playBtn from '../../../assets/images/png/ruinatv-icon-play-b.png';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Content = () => {
  const history = useHistory();
  const content = useSelector(state => state.content);

  function handlePlay(e) {
    return;
  }

  function handlePlaylist(e) {
    history.push('/playlist/' + e.id)
  }

  return (
    <div className={s.container}>
      <h1>Contenido</h1>
      <ul className={s.list}>
        {
          content?.map((e) => {
            return (
              <li key={'content' + e.id} className={s.card} onClick={() => handlePlaylist(e)}>
                <div className={s.imageContainer}>
                  <img src={e.imageSlider ? RenderDriveImage(e.imageSlider) : defaulBackground} alt={e.title} height="100%" />
                </div>
                <div className={s.playIconContainer} onClick={() => handlePlay(e)}>
                  <img src={playBtn} alt="" width="100%" height="100%" />
                </div>
                <div className={s.infoContainer} onClick={() => handlePlaylist(e)}>
                  <span className={s.title}>{e.title?.length < 18 ? e.title : e.title.substring(0, 16) + '...'} </span>
                  <span className={s.artist}>{e.artist}</span>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Content;