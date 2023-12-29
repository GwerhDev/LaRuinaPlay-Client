import { URL_LARUINAHUB_REGISTER } from "../../../middlewares/config"

export const RegisterMessage = () => {
  return (
    <div className='register-message-container'>
      <div className='register-message'>
        <span className='col'>
          <p className='w-600'>REGÍSTRATE</p>
          <p>Disfruta de todo nuestro contenido registrándote gratuitamente.</p>
        </span>
        <span>
          <a href={URL_LARUINAHUB_REGISTER}>
            <button className='action-button'>Registrarse</button>
          </a>
        </span>
      </div>
    </div>
  )
}
