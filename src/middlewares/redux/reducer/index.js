import { Album } from "../../interfaces/album";
import { Player } from "../../interfaces/player";
import {
    SET_PLAYER,
    RESET_PLAYER,
    GET_LIBRARY_LIST,
    GET_ALL_PLAYLIST,
    RESET_PLAYLIST,
    CURRENT_USER,
    GET_USER_DATA,
    GET_CONTENT,
    GET_CONTENT_DETAILS,
    RESET_CONTENT_DETAILS,
    GET_PLAYLIST,
    GET_TRACKLIST,
    GET_ALBUM,
} from "../../misc";

const initialState = {
    currentUser: null,
    content: [],
    imageStore: [],
    album: new Album(),
    player: new Player(),
    details: "",
    myPlaylists: [],
    editionActive: false,
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case RESET_CONTENT_DETAILS:
            return {
                ...state,
                album: new Album()
            };

        case GET_CONTENT:
            return {
                ...state,
                content: action.payload.contentList,
                imageStore: action.payload.imageStore,
            };

        case GET_PLAYLIST:
            return {
                ...state,
                details: action.payload
            };

        case GET_TRACKLIST:
            return {
                ...state,
                tracklist: action.payload
            };

        case GET_ALBUM:
            return {
                ...state,
                album: action.payload
            };

        case GET_CONTENT_DETAILS:
            return {
                ...state,
                details: action.payload
            };

        case RESET_PLAYLIST:
            return {
                ...state,
                tracklist: []
            };

        case SET_PLAYER:
            return {
                ...state,
                player: action.payload
            };

        case RESET_PLAYER:
            return {
                ...state,
                player: new Player(),
                tracklist: []
            };

        case GET_LIBRARY_LIST:
            return {
                ...state,
                tracklist: action.payload
            };

        case GET_ALL_PLAYLIST:
            return {
                ...state,
                myPlaylists: action.payload
            };

        case CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload.userData
            };

        case GET_USER_DATA:
            return {
                ...state,
                currentUser: action.payload.userData
            };

        default:
            return { ...state };
    }
}