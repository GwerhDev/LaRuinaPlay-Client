import s from './Player.module.css';
import { useSelector } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';

export const Player = () => {
  const url = useSelector(state => state.player.url);

  return (
    <AudioPlayer
      className={s.audioplayer}
      src={url}
      onPlay={() => console.log("onPlay")}
      onPause={() => console.log("onPause")}
      onEnded={() => { return }}
      autoPlay>
    </AudioPlayer>
  )
}