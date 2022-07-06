import {
    SET_SLIDER_DESCRIPTION,
    SET_SLIDER_TITLE,
    SET_SLIDER_VIDEO,
    SET_SLIDER_DISCORD,
    SET_SLIDER_TWITTER,
    SET_SLIDER_WEBSITE,
} from '../constants';

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

export const set_slider_discord = data => {
    return {
        type: SET_SLIDER_DISCORD,
        payload: data,
    };
};

export const set_slider_twitter = data => {
    return {
        type: SET_SLIDER_TWITTER,
        payload: data,
    };
};

export const set_slider_website = data => {
    return {
        type: SET_SLIDER_WEBSITE,
        payload: data,
    };
};
