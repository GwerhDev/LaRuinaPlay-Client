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

export function RenderDriveImage(id) {
    if (!id) return null;
    return `https://drive.google.com/uc?export=view&id=${id}`;
};