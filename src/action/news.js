import axios from 'axios';
import { FETCH_HOME_PAGE_NEWS } from "./../data"
import { CONTENT_TYPE_DEFAULT } from "./../utils/"

import {
    REQUEST_NEWS,
    RECEIVE_NEWS,


} from "./types";


export const fetchHomePageNews = (category) => async dispatch => {
    try {
        dispatch({ type: REQUEST_NEWS });
        const res = await axios.get(`${FETCH_HOME_PAGE_NEWS}`, {
            category: category
        }, {
            headers: CONTENT_TYPE_DEFAULT,
        })
        dispatch({ type: RECEIVE_NEWS, payload: res.data });
    } catch (e) {
        console.log(e);
        dispatch({ type: RECEIVE_NEWS, payload: [] });
    }
};

