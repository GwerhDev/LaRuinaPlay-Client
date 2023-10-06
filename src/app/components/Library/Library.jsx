import s from './Library.module.css';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlaylist} from '../../../middlewares/redux/actions';
import defaultImg from '../../../assets/images/png/lista-icon.png';
import favIcon from '../../../assets/images/png/like-icon.png';
import { Navigator } from '../Navigator/Navigator';
import { getUrlPlayer } from '../../../middlewares/redux/actions/player';

export const Library = () => {
  const dispatch = useDispatch();
  const itemList = useSelector(state=>state.itemList);

  useEffect(()=>{
    dispatch(getAllPlaylist);
  }, [dispatch])
  return (
    <section className="section-container">
      <div className="primary-container">
        <Navigator/>
        <div className="secundary-container">
          <div className={s.headerContainer}>
            <div className={s.contImg}>
              <img className={s.imgList} src={defaultImg} alt="default" height='100px' />
            </div>
            <div  className={s.titleList}>
              {!itemList.title? 'Seleccione una lista de reproducción'
              :
              <>
                <h3>Lista</h3>
                <h1>{itemList.title}</h1>
                <h2>{itemList.items.length} items</h2>
              </>
              }
            </div>
          </div>
        </div>
        <div className={s.cont3}>
          {
            itemList.items? itemList.items.map((e,index)=>{
              return(
                <li 
                  className={s.itemListLi}
                  key={index} >
                    <button
                      className={s.itemListBtn}
                      onClick={()=>{return (
                        dispatch(getUrlPlayer(e.itemUrl))
                      )}}>
                        <ul className={s.itemInfo}>
                          <li>{e.itemId}</li> - <li>{e.itemName}</li> - <li>{e.itemArtist}</li> - <li><img className={s.favIcon} src={favIcon} alt='fav' height='20px' /></li>
                        </ul>
                    </button>
                </li>
              )
            }) : null
          }
        </div>
      </div>
    </section>
  )
}
