import axios from 'axios'
import { URL_API } from '../../config'
import { 
    ADD_TO_PLAYLIST,
    GET_LIBRARY_LIST,
    GET_ALL_PLAYLIST,
    RESET_PLAYLIST,
    } from '../../misc';


/* -------------PlayList------------- */
export function getAllPlaylist(userId){
    return async function (dispatch){
        await axios.post(`${URL_API}/playlist/all`, {userId})
        .then(res => {
            console.log(res.data)
            dispatch({
                type: GET_ALL_PLAYLIST,
                payload: res.data
            })
        })
    }
}

export function createPlaylist(playlistName, idUser){
    return async function (){ 
        await axios.post(`${URL_API}/playlist/create`, {playlistName, idUser})
        .then(res => {
            console.log(res.data)
        })
        .catch((e) => {
            console.log(e);
        })
    }
}

export function addToPlaylist(playlistId, connectionId){
    return async function (dispatch){ 
        await axios.post(`${URL_API}/playlist/add`, {playlistId, connectionId})
        .then(res => {
            dispatch({
                type: ADD_TO_PLAYLIST,
                payload: res.data
            })
        })
        .catch((e) => {
            console.log(e);
        })
    }
}

export function getLibraryList(items){
    return {
        type: GET_LIBRARY_LIST,
        payload: items
    }
}

export function resetPlaylist() {
    return {
        type: RESET_PLAYLIST
    }
}