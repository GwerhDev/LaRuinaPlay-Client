import s from './AddTrack.module.css';

export const AddTrack = (props) => {


  return (
    <span className={s.container}>
      <button>Agregar track</button>
      <span className={s.track}>
        <ul>
          <input type="text" />
          <input type="text" />
        </ul>
        <ul>
          <input type="text" />
        </ul>
        <ul>
          <button>✔️</button>
          <button>❌</button>
        </ul>
      </span>
    </span>
  )
}

