import axios from 'axios';
import { FETCH_HOME_PAGE_NEWS, FETCH_DETAILS_NEWS } from "./../data"
import { CONTENT_TYPE_DEFAULT } from "./../utils/"
import { REQUEST_NEWS, RECEIVE_NEWS, RECEIVE_NEWS_DETAILS, REQUEST_NEWS_DETAILS } from "./types";


export const fetchHomePageNews = (page, category) => async dispatch => {

  //console.log('fetchHomePageNews')
  try {
    dispatch({ type: REQUEST_NEWS });
    const res = await axios.get(`${FETCH_HOME_PAGE_NEWS}`, {
      params: {
        category: category,
        offset: page
      }
    }, {
      headers: CONTENT_TYPE_DEFAULT,
    })

    dispatch({ type: RECEIVE_NEWS, payload: res.data });
  } catch (e) {
    console.log(e);
    dispatch({ type: RECEIVE_NEWS, payload: [] });
  }
};


export const fetchArticleDetails = (articleId) => async dispatch => {

  try {
    dispatch({ type: REQUEST_NEWS_DETAILS });
    const res = await axios.get(`${FETCH_DETAILS_NEWS}`, {
      params: {
        post_ID: articleId
      }
    }, {
      headers: CONTENT_TYPE_DEFAULT,
    })
    dispatch({ type: RECEIVE_NEWS_DETAILS, payload: res.data });
  } catch (e) {
    console.log(e);
    dispatch({ type: RECEIVE_NEWS_DETAILS, payload: [] });
  }
};
