import ourProjectsData from 'src/static/our-projects-data';
import {
    SET_SLIDER_DESCRIPTION,
    SET_SLIDER_TITLE,
    SET_SLIDER_VIDEO,
    SET_SLIDER_DISCORD,
    SET_SLIDER_TWITTER,
    SET_SLIDER_WEBSITE,
} from '../constants';

const defaultState = {
    description: ourProjectsData[0].description,
    title: ourProjectsData[0].title,
    video: ourProjectsData[0].videosrc,
    discord: ourProjectsData[0].discord,
    twitter: ourProjectsData[0].twitter,
    website: ourProjectsData[0].link,
};

// eslint-disable-next-line default-param-last
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SLIDER_DESCRIPTION:
            return {
                ...state,
                description: action.payload,
            };

        case SET_SLIDER_TITLE:
            return {
                ...state,
                title: action.payload,
            };

        case SET_SLIDER_VIDEO:
            return {
                ...state,
                video: action.payload,
            };

        case SET_SLIDER_DISCORD:
            return {
                ...state,
                discord: action.payload,
            };

        case SET_SLIDER_TWITTER:
            return {
                ...state,
                twitter: action.payload,
            };

        case SET_SLIDER_WEBSITE:
            return {
                ...state,
                website: action.payload,
            };

        default:
            return { ...state };
    }
};

export default reducer;
