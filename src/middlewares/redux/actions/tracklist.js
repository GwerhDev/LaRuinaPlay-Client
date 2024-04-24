import axios from "axios";
import { URL_API } from "../../config";
import { options } from "../../helpers";
import { GET_TRACKLIST } from "../../misc";

export function getTracklist(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_API}/subscriber/album/content/${id}`, options());
      return (
        dispatch({
          type: GET_TRACKLIST,
          payload: response.data
        }));
    } catch (error) {
      console.error(error);
    };
  };
};