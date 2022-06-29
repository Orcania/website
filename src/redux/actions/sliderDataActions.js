import { SET_SLIDER_DESCRIPTION, SET_SLIDER_TITLE, SET_SLIDER_VIDEO } from '../constants';

export const set_slider_description = data => {
    return {
        type: SET_SLIDER_DESCRIPTION,
        payload: data,
    };
};

export const set_slider_title = data => {
    return {
        type: SET_SLIDER_TITLE,
        payload: data,
    };
};

export const set_slider_video = data => {
    return {
        type: SET_SLIDER_VIDEO,
        payload: data,
    };
};
