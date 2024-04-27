import s from './Player.module.css';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import defaultImage from '../../../assets/images/png/default-background.png';
import playIcon from '../../../assets/images/svg/play-icon.svg';
import pauseIcon from '../../../assets/images/svg/pause-icon.svg';
import urlDefault from '../../../assets/audio/audio.mp3';
import { RenderImageGwerhdinary } from '../../../functions';

export const Player = () => {
  const player = useSelector(state => state.player);
  const { tracklist, currentTrack } = player;
  const { title, artist, cover, url } = tracklist[currentTrack];
  const [playState, setPlayState] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
    setPlayState(true);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setPlayState(false);
  };

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((currentTime / duration) * 100 + "%");
  };

  const handleProgressBarClick = (e) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.nativeEvent.offsetX;
    const progressBarWidth = progressBar.clientWidth;
    const clickPercentage = (clickPosition / progressBarWidth) * 100;
    const newTime = (clickPercentage / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
  };

  return (
    <section className={s.outterContainer}>
      <div className={s.container}>
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onPlay={playAudio}
          onPause={pauseAudio}
          autoPlay
          preload="auto"
        >
          <source src={url || urlDefault} type="audio/mpeg" />
        </audio>
        <span className={s.metadaContainer}>
          <img src={cover ? RenderImageGwerhdinary(cover) : defaultImage} alt="cover" className={s.cover} height={35} />
          <ul className={s.metadata}>
            <li className={s.title}>{title}</li>
            <li className={s.artist}>{artist}</li>
          </ul>
          <span className={s.controllers}>
            {
              playState ?
                <img className={s.button} onClick={pauseAudio} src={pauseIcon} width={20} alt="play" ></img>
                :
                <img className={s.button} onClick={playAudio} src={playIcon} width={20} alt="play" ></img>
            }
          </span>
        </span>
        <div onClick={handleProgressBarClick} className={s.progressContainer}>
          <div className={s.progress} style={{ width: progress }} />
        </div>
      </div>
    </section>
  )
}