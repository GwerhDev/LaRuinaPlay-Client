import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import s from './MenuLateral.module.css';
import React, { useEffect } from 'react';
import { MyLibrary } from '../MyLibrary/MyLibrary';
import searchIcon from '../../../assets/images/svg/search-icon.svg';
import homeIcon from '../../../assets/images/svg/home-icon.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { getUserData } from '../../../middlewares/redux/actions/account';

export const MenuLateral = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <ul className={s.lateralNavigator}>
        <div className={s.navItem}>
          <Link to="/">
            <span className={s.itemName}>
              <img src={homeIcon} width={20} alt="home" />
              Inicio
            </span>
          </Link>
        </div>
        <div className={s.navItem}>
          <Link to="/search">
            <span className={s.itemName}>
              <img src={searchIcon} width={20} alt="search" />
              Buscar
            </span>
          </Link>
        </div>
      </ul>
      {
        currentUser
          ? <MyLibrary />
          : null
      }
    </div>
  )
}
