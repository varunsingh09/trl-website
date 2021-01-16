import { combineReducers } from 'redux';
import requestReducer from './requestReducer';
import ReducerNews from "./news"

export default combineReducers({
  request: requestReducer,
  news: ReducerNews
});
