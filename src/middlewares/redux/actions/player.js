import { RESET_PLAYER, SET_CURRENT_TRACK, SET_PLAYER } from "../../misc";

export function setPlayer(object) {
  return {
    type: SET_PLAYER,
    payload: object
  }
};

export function resetPlayer() {
  return {
    type: RESET_PLAYER
  }
};

export function setCurrentTrack(num) {
  return {
    type: SET_CURRENT_TRACK,
    payload: num
  }
}