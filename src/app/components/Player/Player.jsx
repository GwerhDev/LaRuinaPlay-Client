import s from './Player.module.css';
import AudioPlayer from 'react-h5-audio-player';

export const PlayerList = (props) =>{
    const {url} = props
    return (
        <div className={s.audioplayer}>
            <AudioPlayer 
                src={`${url}`}
                onPlay={() => console.log("onPlay")}
                onPause={() => console.log("onPause")}
                onEnded={() => {return}}
                autoPlay>
            </AudioPlayer>
        </div>
    )
}