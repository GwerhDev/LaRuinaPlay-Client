import s from './MyLibrary.module.css';
import React, {useEffect} from 'react';
import { lists } from '../../../assets/audio/consts';
import { useDispatch, useSelector } from 'react-redux';
import { getItemList, getAllPlaylist} from '../../../middlewares/redux/actions';
import folderIcon from '../../../assets/images/svg/folder-icon.svg';

export const MyLibrary = () => {
  const dispatch = useDispatch()
  const myPlaylists = useSelector(state=>state.myPlaylists)
  useEffect(()=>{
    dispatch(getAllPlaylist)
  }, [dispatch])
  return (
    <div className={s.divPlaylistsCont}>
      <ul className={s.ulPlaylistCont}>
        <div className={s.titlePlaylistCont}>
          <img src={folderIcon} alt="my library" width={30}/>
          <p className={s.titlePlaylist}>Mis Listas</p>
        </div>
        <div className={s.divPlaylistsNames}>
          <ul className={s.ulPlaylistsNames}>  
            {
              lists?.map((e,index)=>{
                return(
                  <li 
                    key={index} 
                    onClick={()=>{return dispatch(getItemList(e))}}
                    className={s.liPlaylistsNames}>
                    <button 
                      onClick={()=>{return dispatch(getItemList(e))}}
                      className={s.btnPlaylistNames}>
                      <h2 className={s.listName}>{e.title}</h2>
                    </button>
                  </li>
                )}
              )
            }
            {
              myPlaylists?.map((e,index)=>{
                return(
                  <li 
                    key={index} 
                    // onClick={()=>{return dispatch(getItemList(e))}}
                    className={s.liPlaylistsNames}>
                    <button 
                      // onClick={()=>{return dispatch(getItemList(e))}}
                      className={s.btnPlaylistNames}>
                      <h2 className={s.title}>{e.title}</h2>
                    </button>
                  </li>
                )}
              )
            }
          </ul>
          <li  
            // onClick={()=>{return dispatch(getItemList(e))}}
            className={s.liPlaylistsNames}>
            <button 
              // onClick={()=>{return dispatch(getItemList(e))}}
              className={s.btnCreateList}>
              <h2 className={s.title}>Crear una lista</h2>
            </button>
          </li>
        </div>
      </ul>
    </div>
  )
}
