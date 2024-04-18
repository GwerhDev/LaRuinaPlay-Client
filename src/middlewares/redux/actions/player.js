import { RESET_URL_PLAYER, URL_PLAYER } from "../../misc";

export function getUrlPlayer(url) {
  return {
    type: URL_PLAYER,
    payload: url
  }
}

export function resetUrlPlayer() {
  return {
    type: RESET_URL_PLAYER
  }
}

