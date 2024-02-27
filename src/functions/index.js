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

export function RenderSliderImageStore(store, id) {
    const imageStore = store?.filter(e => e.imageSlider._id === id);
    return imageStore[0].imageSlider.image;
  };
  
  export function RenderVisorImageStore(store, id) {
    const imageStore = store?.filter(e => e.imageVisor._id === id);
    return imageStore[0]?.imageVisor?.image || null;
  };