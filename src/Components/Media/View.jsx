import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getInfo, getMediaType } from '../../middlewares/redux/actions'
import { Link } from 'react-router-dom'
import s from './css/View.module.css'
import Play from './Play'

const View = () => {
    const dispatch = useDispatch()
    const {id, typeMedia, urlid}= useParams()
    const typeMediaList = useSelector(state =>state.typeMediaList)
    const infoDetailViewer = useSelector(state =>state.infoDetailViewer)
    const {idYT} = infoDetailViewer.urlID
    const [type, setType] = useState([])
    const [mediaLink, setMediaLink] = useState({})
    useEffect(()=>{
        dispatch(getInfo(id))
    },[dispatch, id])

    useEffect(()=>{
        setType(typeMediaList[dispatch(getMediaType(typeMedia)).payload])
    },[dispatch, typeMediaList, typeMedia])

    useEffect(()=>{
        setMediaLink(urlid)
    },[setMediaLink, urlid])
    return (
        <div>
            <div className='visor'>
                <div className='visorBGCanvas'>
                    <img className='visorBG' src={infoDetailViewer.sliderImg} alt='' />
                </div>
                <div className='visorCanvas'></div>
                    <Play id={idYT} />
                <div className='visorPostInfo'>
                    <div className='visorPostArtista'>
                        <p>{infoDetailViewer.artista}</p>
                    </div>
                    <div className='visorPostTitulo' id='viewPostTitulo'>
                    <p>{infoDetailViewer.titulo}</p>
                    <div className='visorInfo'>
                        <h3>{infoDetailViewer.info}</h3>
                    </div>
                    <div className='viewMediaTypesCont'>
                        <ul className='viewMediaTypesList'>
                            {
                                Object.entries(type).map((el)=>{
                                    return(
                                    el.map((e)=>{
                                    return(
                                        <li className='viewLiImg' key={e}><a href={`${e.url}${mediaLink}`}><img className='viewLiIcon' src={e.img} alt="" /></a></li>
                                        )
                                    }))
                                })
                            }
                        </ul>
                        {infoDetailViewer?
                        
                        <button onClick={()=>{return (
                            document.querySelector('.playerCont').style.scale='1',
                            document.querySelector('.playerUI').style.display='block'
                        )}} className='buttonVer'>Ver ahora</button>
                        : null
                        }
                        <Link to='/browser'><button className='buttonVolver'>Volver al inicio</button></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View