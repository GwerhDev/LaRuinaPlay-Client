import axios from "axios";
import { URL_API } from "../../config";
import { options } from "../../helpers";
import { GET_ALBUM } from "../../misc";

export function getAlbumByContent(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_API}/subscriber/album/content/${id}`, options());
      return (
        dispatch({
          type: GET_ALBUM,
          payload: response.data
        }));
    } catch (error) {
      console.error(error);
    };
  };
};