import { combineReducers } from 'redux';
import Countries from "./countries";
import Country from "./country";
import News from "./news";

export default combineReducers({
  countries: Countries,
  country: Country,
  news: News,
});