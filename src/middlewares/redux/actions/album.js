import axios from "axios";
import { URL_API } from "../../config";
import { options } from "../../helpers";
import { GET_ALBUM } from "../../misc";
import { Album } from "../../interfaces/album";

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

export function createAlbum(formData) {
  return async function (dispatch) {
    try {
      await axios.post(`${URL_API}/admin/album/create`, formData, options());
      return (dispatch(getAlbumByContent(formData.contentId)));
    } catch (error) {
      console.error(error);
    };
  };
};

export function updateAlbum(album, file, id) {
  return async function (dispatch) {
    try {
      album.cover = {
        mimetype: file.type,
        originalname: file.name
      };

      const response = await axios.patch(`${URL_API}/admin/album/update`, album, options());

      await axios.put(response.data.presigned.cover, file, {
        headers: {
          "Content-Type": file.type,
        },
      });

      return (dispatch(getAlbumByContent(id)));
    } catch (error) {
      console.error(error);
    };
  };
};


export function resetAlbum() {
  return {
    type: GET_ALBUM,
    payload: new Album(),
  };
};