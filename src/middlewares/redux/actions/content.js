import axios from "axios";
import { URL_API } from "../../config";
import { GET_CONTENT } from "../../misc";

export function getContent() {
  return async function (dispatch) {
    await axios.get(`${URL_API}/media/`)
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
}