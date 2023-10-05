import s from './Auth.module.css';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const Auth = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const authToken = params.get('token');

  console.log(authToken)
  
  useEffect(() => {
  }, []);

  return (
    <div className={s.loaderContainer}>
      <div className='loader'></div>
    </div>
  )
}

export default Auth;