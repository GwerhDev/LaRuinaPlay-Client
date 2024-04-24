import axios from "axios";
import { URL_API } from "../../config";
import { GET_CONTENT, GET_CONTENT_DETAILS } from "../../misc";

export function getContent() {
  return async function (dispatch) {
    await axios.get(`${URL_API}/content/`)
      .then(res => {
        dispatch({
          type: GET_CONTENT,
          payload: res.data
        })
      })
      .catch((e) => {
        console.error(e);
      })
  }
};

export function getContentDetails(id) {
  return async function (dispatch) {
    await axios.get(`${URL_API}/content/${id}`)
      .then(res => {
        dispatch({
          type: GET_CONTENT_DETAILS,
          payload: res.data
        })
      })
      .catch((e) => {
        console.error(e);
      })
  }
};

export function resetContentDetails() {
  return {
    type: GET_CONTENT_DETAILS,
    payload: null
  }
};