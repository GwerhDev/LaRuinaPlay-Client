import axios from "axios"
import { URL_API } from "../../config"
import { options } from "../../helpers";

export function createPlaylist(formData) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${URL_API}/laruinaplay/playlist/create`, formData, options());
      return response.data;
    } catch (error) {
      console.error(error);
    };
  };
};