import {
    URL_PLAYER,
    RESET_URL_PLAYER,
    GET_LIBRARY_LIST,
    GET_ALL_PLAYLIST,
    RESET_PLAYLIST,
    CURRENT_USER,
    GET_USER_DATA,
    GET_CONTENT,
    GET_CONTENT_DETAILS,
    RESET_CONTENT_DETAILS,
} from "../../misc";

const initialState = {
    currentUser: null,
    content: [],
    imageStore: [],
    details: [],
    urlPlayer: '',
    itemList: [],
    myPlaylists: []
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case RESET_CONTENT_DETAILS: 
            return {
                ...state,
                details: []
            };
        case GET_CONTENT:
            return {
                ...state,
                content: action.payload.contentList,
                imageStore: action.payload.imageStore,
            };
        case GET_CONTENT_DETAILS:
            return {
                ...state,
                details: action.payload
            };
        case RESET_PLAYLIST:
            return {
                ...state,
                itemList: []
            };
        case URL_PLAYER:
            return {
                ...state,
                urlPlayer: action.payload
            };
        case RESET_URL_PLAYER:
            return {
                ...state,
                urlPlayer: '',
                itemList: []
            };
        case GET_LIBRARY_LIST:
            return {
                ...state,
                itemList: action.payload
            };
        case GET_ALL_PLAYLIST:
            return {
                ...state,
                myPlaylists: action.payload
            };
        case CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        case GET_USER_DATA:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return { ...state };
    }
}