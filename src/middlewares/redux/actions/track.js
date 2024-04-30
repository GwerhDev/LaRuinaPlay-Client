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

export async function streamTrack(id) {
  try {
    const response = await axios.get(`${URL_API}/subscriber/stream/track/${id}`, options());
    if (!response) {
      throw new Error('Network response was not ok');
    }
    
    const blob = new Blob([response.data], { type: 'audio/mpeg' });
    
    return blob;
  } catch (error) {
    console.error(error);
    throw error;
  }
};