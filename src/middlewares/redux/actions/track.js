import axios from "axios";
import { URL_API } from "../../config";
import { options } from "../../helpers";
import { getAlbumByContent } from "./album";

export function createTrack(formData, id) {
  return async function (dispatch) {
    try {
      await axios.post(`${URL_API}/admin/track/create`, formData, options());
      return (dispatch(getAlbumByContent(id)));
    } catch (error) {
      console.error(error);
    };
  };
};

