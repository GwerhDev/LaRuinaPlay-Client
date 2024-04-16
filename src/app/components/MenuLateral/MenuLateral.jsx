import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import s from './MenuLateral.module.css';
import React, { useEffect, useState } from 'react';
import { MyLibrary } from '../MyLibrary/MyLibrary';
import searchIcon from '../../../assets/images/svg/search-icon.svg';
import homeIcon from '../../../assets/images/svg/home-icon.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { getUserData } from '../../../middlewares/redux/actions/account';
import { ConnectedApps } from '../ConnectedApps/ConnectedApps';
import { resetContentDetails } from '../../../middlewares/redux/actions/content';
import { Resizable } from 'react-resizable';

export const MenuLateral = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);
  const [width, setWidth] = useState(200);

  const handleResize = (event, { size }) => {
    setWidth(size.width);
  };

  function handleClick() {
    dispatch(resetContentDetails());
  };

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <Resizable
      width={width}
      onResize={handleResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <div className={s.container} style={{ width: `${width}px` }}>
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
        {
          currentUser
            ? <MyLibrary />
            : null
        }
        <ConnectedApps />
      </div>
    </Resizable>
  )
}
