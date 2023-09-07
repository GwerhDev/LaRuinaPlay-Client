import axios from 'axios'
import { URL_API } from '../../config'
import { 
    URL_PLAYER,
    RESET_URL_PLAYER,
    ADD_TO_PLAYLIST,
    GET_ITEM_LIST,
    GET_ALL_PLAYLIST,
    GET_ALL_LIKES,
    RESET_PLAYLIST,
    } from '../../misc';

/* ---------------Player-------------- */
export function getUrlPlayer(url){
    return {
        type: URL_PLAYER,
        payload: url
    }
}
export function resetUrlPlayer(){
    return {
        type: RESET_URL_PLAYER
    }
}
export function addLike(idUser, urlId) {
    return async function(dispatch) {
        await axios.post(`${URL_API}/likes/add`, {idUser, urlId})
        .then(res =>{
            dispatch({
                type: 'LIKE',
                payload: res.data
            })
        })
        .catch(e => console.log(e))
    }
}

export function getAllLikes(userId) {
    return async function(dispatch) {
        await axios.post(`${URL_API}/likes/getAll`, {userId})
        .then(res =>{
            dispatch({
                type: GET_ALL_LIKES,
                payload: res.data
            })
        })
        .catch(e => console.log(e))
    }
}


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

export function getItemList(items){
    return {
        type: GET_ITEM_LIST,
        payload: items
    }
}

export function resetPlaylist() {
    return {
        type: RESET_PLAYLIST
    }
}