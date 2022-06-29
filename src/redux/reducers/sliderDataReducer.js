import ourProjectsData from 'src/static/our-projects-data';
import { SET_SLIDER_DESCRIPTION, SET_SLIDER_TITLE, SET_SLIDER_VIDEO } from '../constants';

const defaultState = {
    description: ourProjectsData[0].description,
    title: ourProjectsData[0].title,
    video: ourProjectsData[0].videosrc,
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

        default:
            return { ...state };
    }
};

export default reducer;
