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