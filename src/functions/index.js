import axios from "axios";
import { URL_STREAMBY } from "../middlewares/config";

const defaultValue = {
    style: {
        transform: '',
        opacity: '',
        filter: '',
        scale: '',
        overflowY: '',
        transitionDuration: '',
        transformOrigin: '',
        transformStyle: '',
        transitionTimingFunction: '',
        transformBox: '',
        transitionDelay: '',
        transitionProperty: '',
    },
    contains
};

function contains() {
    return;
}

export const $d = (e) => {
    return document.querySelector(e) || defaultValue
};

export const $gId = (e) => {
    return document.getElementById(e) || defaultValue
};

export function StreamByImage(id) {
    const url = `${URL_STREAMBY}/i/${id}`;
    return url;
};

export async function StreamByAudio(id) {
    const response = await axios.get(`${URL_STREAMBY}/a/${id}`);
    return response.data;
};