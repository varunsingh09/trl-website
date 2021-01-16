import {
    REQUEST_NEWS,
    RECEIVE_NEWS,
    REQUEST_NEWS_DETAILS,
    RECEIVE_NEWS_DETAILS
} from "../actions/types";

const INITIAL_STATE = {
    data: [],
    isFetching: false,
    lastUpdate: Date.now()
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case REQUEST_NEWS: {
            return { ...state, isFetching: true };
        }
        case RECEIVE_NEWS: {
            return { ...state, isFetching: false, news: action.payload && action.payload.data ? action.payload.data : [] };
        }


        case REQUEST_NEWS_DETAILS: {
            return { ...state, isFetching: true };
        }
        case RECEIVE_NEWS_DETAILS: {
            return { ...state, isFetching: false, newsdetails: action.payload && action.payload.data ? action.payload.data : [] };
        }
        default:
            return state;
    }
};