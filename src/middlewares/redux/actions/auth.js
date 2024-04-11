import axios from "axios";
import { URL_API } from "../../config";
import { CURRENT_USER } from "../../misc";
import { options } from "../../helpers";

export function auth(history) {
  return async function (dispatch) {
    await axios.get(`${URL_API}/auth`, options())
      .then(res => {
        dispatch({
          type: CURRENT_USER,
          payload: res.data
        })
        return res.data.logged && history.push(`/browser`);
      })
      .catch((e) => {
        console.error(e);
        return;
      })
  }
};

export function loginGoogle() {
  return async function () {
    await axios.get(`${URL_API}/login-google`)
      .catch((e) => { console.error(e) });
  }
};

export function signupInner(email, password, history) {
  return async function () {
    await axios.post(`${URL_API}/signup-inner`, { email, password })
      .then(res => {
        return res.data.logged && history.push(`/auth?token=${res.data.token}`);
      })
      .catch((e) => {
        console.error(e);
        return;
      })
  }
};

export function signupGoogle(history) {
  return async function () {
    await axios.get(`${URL_API}/login-google-play`)
      .then(res => {
        return res.data.logged && history.push(`/auth?token=${res.data.token}`);
      })
      .catch((e) => {
        console.error(e);
        return;
      })
  }
};

export function logout() {
  localStorage.clear();
  window.location.reload();
};