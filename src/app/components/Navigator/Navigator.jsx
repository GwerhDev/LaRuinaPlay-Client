import s from './Navigator.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../../middlewares/redux/actions/account';
import { MenuAuth } from '../MenuAuth/MenuAuth';
import { MenuProfile } from '../MenuProfile/MenuProfile';

export const Navigator = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);

  useEffect(() => {
    dispatch(getUserData())
  }, [dispatch]);

  return (
    <nav>
      <div className={s.container}>
          {
            currentUser 
            ? <MenuProfile/>
            : <MenuAuth/>
          }
      </div>
    </nav>
  )
}
