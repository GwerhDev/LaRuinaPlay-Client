import s from './Content.module.css';
import { useSelector } from 'react-redux';
import { RenderDriveImage } from '../../../functions';
import defaulBackground from '../../../assets/images/png/default-background.png';

const Content = () => {
  const content = useSelector(state => state.content);

  return (
    <div className={s.container}>
      <h1>Contenido</h1>
      <ul className={s.list}>
        {
          content?.map((e) => {
            return (
              <li key={'content'+ e.id} className={s.card}>
                <div className={s.imageContainer}>
                  <img src={e.imageSlider? RenderDriveImage(e.imageSlider) : defaulBackground} alt={e.title} height="100%"/>
                </div>
                <div className={s.infoContainer}>
                  <span className={s.title}>{e.title} </span>
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