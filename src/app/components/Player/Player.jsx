import s from './Player.module.css';
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import defaultImage from '../../../assets/images/png/default-background.png';
import playIcon from '../../../assets/images/svg/play-icon.svg';
import pauseIcon from '../../../assets/images/svg/pause-icon.svg';
import { setCurrentTrack } from '../../../middlewares/redux/actions/player';

export const Player = () => {
  const dispatch = useDispatch();
  const player = useSelector(state => state.player);
  const { tracklist, currentTrack } = player;
  const { title, artist, cover, url } = tracklist[currentTrack];
  const [progress, setProgress] = useState(0);
  const [playState, setPlayState] = useState(false);
  const audioRef = useRef(null);
  const progressRef = useRef(null);

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
    const duration = audioRef.current.duration || 1;
    const progressPercent = (currentTime / duration) * 100;
    setProgress(progressPercent);

    progressRef.current.style.background = `linear-gradient(to right, #c7c7c7 ${progressPercent}%, #747474 ${progressPercent}%)`;
  };

  const handleProgressBarChange = (e) => {
    const newTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
  };

  useEffect(() => {
    if (audioRef.current) {
      const duration = audioRef.current.duration || 1;
      const currentTime = audioRef.current.currentTime;
      const progressPercent = (currentTime / duration) * 100;
      setProgress(progressPercent);

      progressRef.current.style.background = `linear-gradient(to right, #c7c7c7 ${progressPercent}%, #747474 ${progressPercent}%)`;
    }
  }, [audioRef.current?.currentTime]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
      setPlayState(true);
    }
  }, [currentTrack, url]);

  const handleTrackEnd = () => {
    if (tracklist.length > currentTrack + 1) {
      dispatch(setCurrentTrack(currentTrack + 1));
    } else {
      setPlayState(false);
    }
  };

  return (
    <section className={s.outterContainer}>
      <div className={s.container}>
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onPlay={() => setPlayState(true)}
          onPause={() => setPlayState(false)}
          onEnded={handleTrackEnd}
          autoPlay
          preload="auto"
        >
          <source src={url} type="audio/mpeg" />
        </audio>
        <span className={s.metadaContainer}>
          <img src={cover ? cover : defaultImage} alt="cover" className={s.cover} height={35} />
          <ul className={s.metadata}>
            <li className={s.title}>{title}</li>
            <li className={s.artist}>{artist}</li>
          </ul>
          <span className={s.controllers}>
            {
              playState
                ? <img className={s.button} onClick={pauseAudio} src={pauseIcon} width={20} alt="pause" />
                : <img className={s.button} onClick={playAudio} src={playIcon} width={20} alt="play" />
            }
          </span>
        </span>
        <input
          type="range"
          ref={progressRef}
          value={progress}
          onChange={handleProgressBarChange}
          className={s.progressContainer}
          min="0"
          max="100"
        />
      </div>
    </section>
  );
}
