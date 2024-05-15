import axios from "axios";
import { URL_API } from "../../config";
import { options } from "../../helpers";
import { getAlbumByContent } from "./album";

export function createTrack(formData, file, id) {
  return async function (dispatch) {
    try {
      const fileData = {
        mimetype: file.type,
        originalname: file.name
      };

      const response = await axios.post(
        `${URL_API}/admin/track/create`, 
        { title: formData.title, albumId: formData.albumId, fileData }, 
        options()
      );

      await axios.put(response.data.presigned, file, {
        headers: {
          "Content-Type": file.type,
        },
      });

      dispatch(getAlbumByContent(id));
    } catch (error) {
      console.error('Error creating track:', error);
    }
  };
};

export function deleteTrack(id, contentId) {
  return async function (dispatch) {
    try {
      await axios.delete(`${URL_API}/admin/track/delete/${id}`, options());
      return (dispatch(getAlbumByContent(contentId)));
    } catch (error) {
      console.error(error);
    }
  }
};
