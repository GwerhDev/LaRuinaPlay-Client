import { useSelector } from 'react-redux';
import s from './MenuLateral.module.css';
import React from 'react';
import { MyLibrary } from '../MyLibrary/MyLibrary';
import searchIcon from '../../../assets/images/svg/search-icon.svg';
import homeIcon from '../../../assets/images/svg/home-icon.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const MenuLateral = () => {
  const currentUser = useSelector(state => state.currentUser);

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
        <Link to="/search">
          <div className={s.navItem}>
            <span className={s.itemName}>
              <img src={searchIcon} width={20} alt="search" />
              Buscar
            </span>
          </div>
        </Link>
      </ul>
      {
        currentUser
        ? <MyLibrary/>
        : null
      }
    </div>
  )
}
