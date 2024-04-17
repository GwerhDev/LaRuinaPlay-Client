import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import s from './MenuLateral.module.css';
import React, { useEffect } from 'react';
import { MyLibrary } from '../MyLibrary/MyLibrary';
import searchIcon from '../../../assets/images/svg/search-icon.svg';
import homeIcon from '../../../assets/images/svg/home-icon.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { getUserData } from '../../../middlewares/redux/actions/account';
import { ConnectedApps } from '../ConnectedApps/ConnectedApps';
import { resetContentDetails } from '../../../middlewares/redux/actions/content';

export const MenuLateral = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);

  function handleClick() {
    dispatch(resetContentDetails());
  };

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <ul className={s.lateralNavigator}>
        <Link className={s.itemName} to="/" onClick={handleClick}>
          <img src={homeIcon} width={20} alt="home" />
          Inicio
        </Link>
        <Link className={s.itemName} to="/search" onClick={handleClick}>
          <img src={searchIcon} width={20} alt="search" />
          Buscar
        </Link>
      </ul>
      <ul className={s.lateralNavigator}>
        {
          currentUser
            ? <MyLibrary />
            : null
        }
        <ConnectedApps />
      </ul>
    </div>
  )
}
