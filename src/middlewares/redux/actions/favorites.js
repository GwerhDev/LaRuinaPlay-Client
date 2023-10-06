import axios from "axios";
import { URL_API } from "../../config";
import { ADD_FAVORITE, GET_FAVORITES } from "../../misc";

export function addLike(idUser, urlId) {
  return async function (dispatch) {
    await axios.post(`${URL_API}/favorites/`, { idUser, urlId })
      .then(res => {
        dispatch({
          type: ADD_FAVORITE,
          payload: res.data
        })
      })
      .catch(e => console.log(e))
  }
}

export function getFavorites(userId) {
  return async function (dispatch) {
    await axios.post(`${URL_API}/favorites/`, { userId })
      .then(res => {
        dispatch({
          type: GET_FAVORITES,
          payload: res.data
        })
      })
      .catch(e => console.log(e))
  }
}