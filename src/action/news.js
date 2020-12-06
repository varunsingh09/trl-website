import axios from 'axios';
import { FETCH_HOME_PAGE_NEWS } from "./../data"

import {
    REQUEST_NEWS,
    RECEIVE_NEWS,


} from "./types";


export const fetchHomePageNews = () => async dispatch => {
    try {
        dispatch({ type: REQUEST_NEWS });
        const res = await axios.get(`${FETCH_HOME_PAGE_NEWS}`);
        dispatch({ type: RECEIVE_NEWS, payload: res.data });
    } catch (e) {
        console.log(e);
        dispatch({ type: RECEIVE_NEWS, payload: [] });
    }
};

