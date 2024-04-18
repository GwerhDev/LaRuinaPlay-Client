import axios from 'axios'
import { URL_API } from '../../config'
import { 
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