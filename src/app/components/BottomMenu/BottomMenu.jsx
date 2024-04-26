import s from './BottomMenu.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { resetContentDetails } from '../../../middlewares/redux/actions/content';
import { useDispatch } from 'react-redux';
import homeIcon from '../../../assets/images/svg/home-icon.svg';
import searchIcon from '../../../assets/images/svg/search-icon.svg';
import folderIcon from '../../../assets/images/svg/folder-icon.svg';
import { useEffect } from 'react';
import { getUserData } from '../../../middlewares/redux/actions/account';

export const BottomMenu = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  function handleClick() {
    dispatch(resetContentDetails());
  };

  return (
    <div className={s.container}>
      <ul className={s.menuContainer}>
        <Link className={s.itemMenu} to="/" onClick={handleClick}>
          <img src={homeIcon} width={20} alt="home" />
          Inicio
        </Link>
        <Link className={s.itemMenu} to="/search" onClick={handleClick}>
          <img src={searchIcon} width={20} alt="search" />
          Buscar
        </Link>
        <Link className={s.itemMenu} to="/library" onClick={handleClick}>
          <img src={folderIcon} width={20} alt="search" />
          Biblioteca
        </Link>
      </ul>
    </div>
  )
}
