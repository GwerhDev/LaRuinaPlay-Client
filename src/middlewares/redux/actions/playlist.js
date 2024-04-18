import axios from "axios";
import { URL_API } from "../../config";
import { options } from "../../helpers";
import { GET_ALL_PLAYLIST, GET_PLAYLIST, RESET_PLAYLIST } from "../../misc";

export function getPlaylists() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_API}/subscriptor/playlist/`, options());
      return (
        dispatch({
          type: GET_ALL_PLAYLIST,
          payload: response.data
        }));
    } catch (error) {
      console.error(error);
    };
  };
};

export function getPlaylist(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_API}/subscriptor/playlist/${id}`, options());
      return (
        dispatch({
          type: GET_PLAYLIST,
          payload: response.data
        }));
    } catch (error) {
      console.error(error);
    };
  };
};

export function resetPlaylist() {
  return {
    type: RESET_PLAYLIST
  };
};

export function createPlaylist(formData) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${URL_API}/subscriptor/playlist/create`, formData, options());
      dispatch(getPlaylists());
      return response.data;
    } catch (error) {
      console.error(error);
    };
  };
};