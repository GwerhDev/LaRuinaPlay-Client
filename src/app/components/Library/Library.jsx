import s from './Library.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import defaultImg from '../../../assets/images/png/lista-icon.png';
import favIcon from '../../../assets/images/png/like-icon.png';
import { getUrlPlayer } from '../../../middlewares/redux/actions/player';
import { getPlaylist } from '../../../middlewares/redux/actions/playlist';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export const Library = () => {
  const dispatch = useDispatch();
  const itemList = useSelector(state => state.itemList);
  const details = useSelector(state => state.details);
  const params = useParams();
  const { id } = params || null;

  useEffect(() => {
    dispatch(getPlaylist(id));
  }, [dispatch, id]);

  return (
    <div className="secundary-container">
      <div className={s.headerContainer}>
        <div className={s.contImg}>
          <img className={s.imgList} src={defaultImg} alt="default" height='100px' />
        </div>
        <div className={s.titleList}>
          {
            !details
              ?
              <>
                <h1>Seleccione una lista de reproducción</h1>
              </>
              :
              <>
                <h3>Lista</h3>
                <h1>{details?.name}</h1>
                <h2>{details?.items?.length} items</h2>
              </>
          }
        </div>
      </div>
      <div className={s.cont3}>
        {
          itemList.items
            ?
            itemList.items.map((e, index) => {
              return (
                <li className={s.itemListLi} key={index} >
                  <button
                    className={s.itemListBtn}
                    onClick={() => dispatch(getUrlPlayer(e.itemUrl))}>
                    <ul className={s.itemInfo}>
                      <span className={s.itemData}>
                        <li>{e.itemId}</li>
                        <ul>
                          <li className={s.contentTitle}>{e.itemName}</li>
                          <li className={s.contentArtist}>{e.itemArtist}</li>
                        </ul>
                      </span>
                      <li></li>
                      <li><img className={s.favIcon} src={favIcon} alt='fav' height='20px' /></li>
                    </ul>
                  </button>
                </li>
              )
            })
            :
            null
        }
      </div>
    </div>
  )
}
